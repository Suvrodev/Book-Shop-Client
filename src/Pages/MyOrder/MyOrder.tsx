import { toast } from "sonner";
import BlankPage from "../../component/BlankPage/BlankPage";
import { useTitle } from "../../component/hook/useTitle";
import LoadingPage from "../../component/LoadingPage/LoadingPage";
import {
  useDeletePaymentMutation,
  useGetMyOrderQuery,
} from "../../Redux/api/features/Payment/paymenManagementApi";
import { useAppSelector } from "../../Redux/hooks";
import { TUser } from "../../utils/Types/GlobalType";
import DeleteIcon from "@mui/icons-material/Delete";
import { sonarId } from "../../utils/Fucntion/sonarId";

const MyOrder = () => {
  useTitle("My Order");
  const { user } = useAppSelector((state) => state.auth);
  // console.log("User: ", user);
  const [deleteOrder] = useDeletePaymentMutation();
  const { data, isLoading } = useGetMyOrderQuery((user as TUser)?._id);
  const orders = data?.data;
  console.log("Orders: ", orders);

  const handleDelete = async (_id: string) => {
    console.log("Payment id: ", _id);
    toast.loading("Deleting Order", { id: sonarId });
    const res = await deleteOrder(_id).unwrap();
    if (res?.status) {
      console.log("Res: ", res);
      toast.success("Deleted Successfully", { id: sonarId });
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  if (orders?.length == 0) {
    return <BlankPage data=" You didn't make any Order " />;
  }

  return (
    <div>
      <h1 className="text-white text-xl font-bold my-4">My Order</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra border">
          {/* head */}
          <thead className="bg-green-600 text-white">
            <tr>
              <th></th>
              <th>Book Image</th>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Book Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Transaction id</th>
              <th>Admin Approval</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {orders?.map((data: any, idx: number) => (
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
                <td>{data?.transactionId}</td>
                <td>
                  {data?.adminApproval === "pending" ? (
                    <p className="badge badge-secondary text-white">
                      {data?.adminApproval}
                    </p>
                  ) : (
                    <p className="badge badge-primary text-white">
                      {data?.adminApproval}
                    </p>
                  )}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
