import { useTitle } from "../../../component/hook/useTitle";
import LoadingPage from "../../../component/LoadingPage/LoadingPage";
import { useGetAllUserQuery } from "../../../Redux/api/features/User/userManagementApi";
import { TUser } from "../../../utils/Types/GlobalType";
import UserManagementRow from "./UserManagementRow";

const UserManagement = () => {
  useTitle("User Management");
  const { data, isLoading } = useGetAllUserQuery(undefined);
  const user = data?.data;
  //   console.log("User: ", user);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Show All User</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>isBlocked</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((data: TUser, idx: number) => (
              <UserManagementRow key={idx} user={data} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
