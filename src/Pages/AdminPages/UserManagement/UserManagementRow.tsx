import { ChangeEvent, useState } from "react";
import { TUser } from "../../../utils/Types/GlobalType";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../../../Redux/api/features/User/userManagementApi";
import { toast } from "sonner";
import { sonarId } from "../../../utils/Fucntion/sonarId";
import { stringToBoolean } from "../../../utils/Fucntion/stringToBoolean";
interface IProps {
  user: TUser;
  idx: number;
}
const UserManagementRow = ({ user, idx }: IProps) => {
  const [deletUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();

  ///Handle Role
  const [role, setRole] = useState<string>(user?.role);
  const handleRole = async (event: ChangeEvent<HTMLSelectElement>) => {
    const data = event.target.value;
    setRole(data);
    const updateData = { role: data };
    const res = await updateUser({ id: user?._id, updateData }).unwrap();
    if (res?.success) {
      toast.success("User role changed", { id: sonarId });
    }
  };
  //   console.log("Role: ", role);

  //Handle is Blocked
  const [block, setBlock] = useState<string>(String(user?.isBlocked));
  const handleBlock = async (event: ChangeEvent<HTMLSelectElement>) => {
    const data = event.target.value;
    setBlock(data);
    const blockData = stringToBoolean(data);
    console.log("Block Data: ", blockData);
    const updateData = { isBlocked: blockData };
    const res = await updateUser({ id: user?._id, updateData }).unwrap();
    if (res?.success) {
      toast.success(`User is ${data === "true" ? "Blocked" : "Unblocked"}`, {
        id: sonarId,
      });
    }
  };
  console.log("Block: ", block);

  const handleDelete = async (id: string) => {
    toast.loading("Deleting User", { id: sonarId });
    const res = await deletUser(id).unwrap();
    if (res?.success) {
      toast.success("User deleted Successfully", { id: sonarId });
    }
  };

  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>
        <select
          onChange={handleRole}
          value={role}
          className="outline-none py-2 px-4 rounded-md"
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
      </td>
      <td>
        <select
          onChange={handleBlock}
          value={block}
          className="outline-none py-2 px-4 rounded-md"
        >
          <option value="true">Blocked</option>
          <option value="false">Unblocked</option>
        </select>
      </td>
      <td>
        <button
          className="btn btn-sm btn-error"
          onClick={() => handleDelete(user?._id)}
        >
          {" "}
          <DeleteIcon className="text-white" />{" "}
        </button>
      </td>
    </tr>
  );
};

export default UserManagementRow;
