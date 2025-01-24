import { useLottie } from "lottie-react";
import { Helmet } from "react-helmet-async";
import { StartFromTop } from "../../component/startFromTop";
import RegAnim from "../../../public/Reg_Lottie.json";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import { sonarId } from "../../utils/functions";
import { useRegistrationMutation } from "../../Redux/api/features/auth/authApi";
const Registration = () => {
  const [addRegister] = useRegistrationMutation();

  const options = {
    animationData: RegAnim,
    loop: true,
  };

  const { View } = useLottie(options);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [accept, setAccept] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleAccept = (event: ChangeEvent<HTMLInputElement>) => {
    const data = event.target.checked;
    setAccept(data);
  };

  const handleRegistration = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Form = event.target as HTMLFormElement;
    const name = Form.namee.value;
    const email = Form.email.value;
    const password = Form.password.value;
    const confirmPassword = Form.confirmPassword.value;
    if (password != confirmPassword) {
      toast.error("Password and Confirm Password Doesn't Matched", {
        id: sonarId,
      });
      return;
    }

    const formData = { name, email, password };
    console.log("Form Data: ", formData);
    toast.loading("Creating User", { id: sonarId });
    const res = await addRegister(formData).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success("Registration successfully", { id: sonarId });
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row ">
      <Helmet>
        <title>Registration | BookShop</title>
      </Helmet>
      <StartFromTop />

      <div className="w-full md:w-[50%]   flex items-center justify-center ">
        <div className="card-body  flex flex-col justify-center  ">
          <h1 className="text-3xl font-bold text-center">Registration now!</h1>

          <form onSubmit={handleRegistration}>
            <div className="form-control  ">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder=" Name"
                className="input input-bordered"
                name="namee"
                required
              />
            </div>
            <div className="form-control  my-4">
              <label className="label">
                <span className="label-text font-bold ">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>

            <div className="form-control relative  my-4">
              <label className="label font-bold">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                name="password"
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
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                name="confirmPassword"
                required
              />

              <div
                onClick={handleShowPasswordConfirm}
                className="absolute right-10 bottom-3"
              >
                {showPasswordConfirm ? "Hide" : "Show"}
              </div>
            </div>

            <p className="w-full mx-auto flex items-center my-4">
              <input
                onChange={handleAccept}
                className="ms-2"
                type="checkbox"
                name="accept"
                id=""
              />
              <Link to="/terms-and-condition" className="ms-2 underline">
                Accept Our Terms and Condition
              </Link>
            </p>

            <div className="form-control mt-6">
              <input
                type="submit"
                disabled={!accept}
                className="btn btn-primary"
                value="Registration"
              />
            </div>
            <p className="text-center my-2">
              Already Have an account? Go to{" "}
              <Link to={"/login"} className="font-bold underline text-blue-600">
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>

      <div className="w-full md:w-[50%] flex items-center justify-center p-0 md:p-20">
        <div className="w-full p-10">{View}</div>
      </div>
    </div>
  );
};

export default Registration;
