import { ChangeEvent, useState } from "react";
import { sonarId } from "../../../utils/Fucntion/sonarId";
// import { useAppSelector } from "../../../Redux/hooks";
import {
  useDeletePaymentMutation,
  useSuccessPaymentMutation,
} from "../../../Redux/api/features/Payment/paymenManagementApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

interface Iprops {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  idx: number;
}
const OrderManagementTable = ({ data, idx }: Iprops) => {
  //   const { user } = useAppSelector((state) => state.auth);
  // console.log("User: ", user);
  //   console.log("Data: ", data);
  const [deleteOrder] = useDeletePaymentMutation();
  const [makeUpdateOrder] = useSuccessPaymentMutation();

  const [adminApproval, setAdminApproval] = useState(data?.adminApproval);
  const handleAdminApproval = async (event: ChangeEvent<HTMLSelectElement>) => {
    const updateData = event.target.value;
    setAdminApproval(updateData);
    toast.loading("Updating Order", { id: sonarId });
    const corfirmOrder = {
      adminApproval: updateData,
      bookId: data?.productId?._id,
      quantity: data?.quantity,
    };
    console.log("Confirm order: ", corfirmOrder);
    const res = await makeUpdateOrder({ id: data?._id, corfirmOrder }).unwrap();
    if (res?.status) {
      toast.success("Order Updated", { id: sonarId });
    }
  };

  const handleDelete = async (_id: string) => {
    console.log("Payment id: ", _id);
    toast.loading("Deleting Order", { id: sonarId });
    const res = await deleteOrder(_id).unwrap();
    if (res?.status) {
      console.log("Res: ", res);
      toast.success("Deleted Successfully", { id: sonarId });
    }
  };

  return (
    <tr key={idx}>
      <th>{idx + 1}</th>
      <td>
        {" "}
        <img
          src={data?.productId?.imageUrl}
          className="w-[65px] h-[80px] rounded-md"
          alt=""
        />
      </td>
      <td>{data?.productId?.title}</td>
      <td>{data?.productId?.author}</td>
      <td>{data?.productId?.category}</td>
      <td>{data?.quantity}</td>
      <td>{data?.price}</td>
      <td>{data?.userId?.name}</td>
      <td>{data?.userId?.email}</td>
      <td>{data?.transactionId}</td>
      <td>
        <select
          name=""
          id=""
          value={adminApproval}
          onChange={handleAdminApproval}
          className="border border-green-500 p-2 rounded-md"
        >
          <option value="confirm"> confirm </option>
          <option value="pending"> pending </option>
        </select>
      </td>
      <td>
        {" "}
        <button
          className="btn btn-error text-white"
          onClick={() => handleDelete(data?._id)}
        >
          <DeleteIcon />
        </button>{" "}
      </td>
    </tr>
  );
};

export default OrderManagementTable;
