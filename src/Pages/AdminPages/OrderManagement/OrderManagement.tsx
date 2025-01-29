import { useTitle } from "../../../component/hook/useTitle";
import { useGetAdminOrderQuery } from "../../../Redux/api/features/Payment/paymenManagementApi";

import LoadingPage from "../../../component/LoadingPage/LoadingPage";
import BlankPage from "../../../component/BlankPage/BlankPage";

import OrderManagementTable from "./OrderManagementTable";

const OrderManagement = () => {
  useTitle("Order Management");

  const { data, isLoading } = useGetAdminOrderQuery(undefined);
  const orders = data?.data;
  // console.log("Orders: ", orders);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (orders?.length == 0) {
    return <BlankPage data=" There are no order" />;
  }

  return (
    <div>
      <h1>My Order</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Book Image</th>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Book Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Transaction id</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Admin Approval</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {orders?.map((data: any, idx: number) => (
              <OrderManagementTable key={idx} data={data} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
