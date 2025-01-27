import { toast } from "sonner";
import LoadingPage from "../../component/LoadingPage/LoadingPage";
import {
  useDeleteCartMutation,
  useGetMyCartQuery,
} from "../../Redux/api/features/Cart/cartManagementApi";
import { useAppSelector } from "../../Redux/hooks";
import { TUser } from "../../utils/Types/GlobalType";
import { sonarId } from "../../utils/Fucntion/sonarId";

const MyCart = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [deleteCart] = useDeleteCartMutation();
  const { data, isLoading } = useGetMyCartQuery((user as TUser)?._id);
  const carts = data?.data;
  console.log("Carts: ", carts);

  const handleDelete = async (id: string) => {
    toast.loading("Deleting", { id: sonarId });
    const res = await deleteCart(id).unwrap();
    console.log("Res: ", res);
    if (res?.status) {
      toast.success("Cart Deleted Successfully", { id: sonarId });
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        My Cart
      </h1>
      {carts?.length === 0 ? (
        <div className="text-center text-white">
          <p>Your cart is empty!</p>
        </div>
      ) : (
        <div className="space-y-6 text-white">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {carts?.map((cartItem: any, idx: number) => (
            <div
              key={idx}
              className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-6"
            >
              {/* Cart Item Image */}
              <div className="w-32 h-48">
                <img
                  src={cartItem?.bookId?.imageUrl} // Replace with book image URL
                  alt={cartItem?.bookId?.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Cart Item Details */}
              <div className="flex-1">
                <h2 className="text-xl  text-white font-bold">
                  {cartItem.bookId?.title}
                </h2>
                <p className="text-lg text-white italic">
                  by {cartItem?.bookId?.author}
                </p>
                <div className="flex gap-2 items-center">
                  <p className="font-bold">Category</p>
                  <p className="text-yellow-500 text-sm font-bold">
                    {cartItem?.bookId?.category}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <p className="font-bold">Model</p>
                  <p className="text-green-500 text-lg font-bold">
                    ${cartItem?.bookId?.model}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="font-bold">Price</p>
                  <p className="text-orange-500 text-lg font-bold">
                    ${cartItem?.bookId?.price}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button className="btn btn-sm btn-success text-white">
                    Confirm Order{" "}
                  </button>
                  <button
                    className="btn btn-sm btn-error text-white"
                    onClick={() => handleDelete(cartItem?._id)}
                  >
                    Delete from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;
