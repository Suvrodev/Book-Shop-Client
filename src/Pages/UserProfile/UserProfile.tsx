import { FormEvent, useState } from "react";
import { useAppSelector } from "../../Redux/hooks";
import { useChangePasswordMutation } from "../../Redux/api/features/auth/authApi";
import { toast } from "sonner";
import { sonarId } from "../../utils/Fucntion/sonarId";
import { useTitle } from "../../component/hook/useTitle";

const UserProfile = () => {
  useTitle("User Profile");
  const [updatePassword] = useChangePasswordMutation();
  const { user } = useAppSelector((state) => state.auth);
  console.log(user);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleUpdatePassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
    const oldPassword = Form.oldPassword.value;
    const newPassword = Form.newPassword.value;
    const formData = { oldPassword, newPassword };
    console.log("Form Data: ", formData);
    toast.loading("Changing Password", { id: sonarId });
    const res = await updatePassword({
      id: user?._id,
      userPassword: formData,
    }).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success(res?.message, { id: sonarId });
    }
  };

  return (
    <div className=" relative">
      <div className="my-10 h-[55vh]">
        <p className="text-orange-400 text-2xl italic ">
          Hi,{" "}
          <span className="text-green-500 font-normal not-italic">
            {user?.name}
          </span>{" "}
        </p>
        <p className="font-bold">{user?.email}</p>
        <p className="my-4 font-bold">You can Change your passowrd</p>
        <div className="w-full md:w-1/2">
          <form action="" onSubmit={handleUpdatePassword}>
            <div className="form-control relative  my-4">
              <label className="label font-bold">
                <span className="label-text">Old Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="oldPassword"
                className="input input-bordered"
                name="oldPassword"
                required
              />

              <div
                onClick={handleShowPassword}
                className="absolute right-10 bottom-3"
              >
                {showPassword ? "Hide" : "Show"}
              </div>
            </div>

            <div className="form-control relative  my-4">
              <label className="label font-bold">
                <span className="label-text">New Password</span>
              </label>
              <input
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                name="newPassword"
                required
              />

              <div
                onClick={handleShowPasswordConfirm}
                className="absolute right-10 bottom-3"
              >
                {showPasswordConfirm ? "Hide" : "Show"}
              </div>
            </div>
            <button className="btn btn-primary text-white">Save Change</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
