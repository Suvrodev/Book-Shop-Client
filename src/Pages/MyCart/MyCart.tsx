import { toast } from "sonner";
import LoadingPage from "../../component/LoadingPage/LoadingPage";
import {
  useDeleteCartMutation,
  useGetMyCartQuery,
} from "../../Redux/api/features/Cart/cartManagementApi";
import { useAppSelector } from "../../Redux/hooks";
import { TUser } from "../../utils/Types/GlobalType";
import { sonarId } from "../../utils/Fucntion/sonarId";
import { useTitle } from "../../component/hook/useTitle";
import { useInitialPayMutation } from "../../Redux/api/features/Payment/paymenManagementApi";

const MyCart = () => {
  useTitle("My Cart");
  const { user } = useAppSelector((state) => state.auth);
  const [deleteCart] = useDeleteCartMutation();
  const [initialPayment] = useInitialPayMutation();
  const { data, isLoading } = useGetMyCartQuery((user as TUser)?._id);
  const carts = data?.data;
  // console.log("Carts: ", carts);

  const handleDelete = async (id: string) => {
    toast.loading("Deleting", { id: sonarId });
    const res = await deleteCart(id).unwrap();
    console.log("Res: ", res);
    if (res?.status) {
      toast.success("Cart Deleted Successfully", { id: sonarId });
    }
  };

  ///Confirm Order
  const handleConfirmOrder = async (
    cartId: string,
    productId: string,
    price: string,
    quantity: string
  ) => {
    // console.log("Cart id: ", cartId);
    // console.log("User id: ", user?._id);
    // console.log("Product id:", productId);
    // console.log("Price:", price);
    const priceInNumber = Number(price);
    const quantityInNumber = Number(quantity);
    const totalPrice = priceInNumber * quantityInNumber;
    const orderData = {
      cartId,
      userId: user?._id,
      productId,
      price: totalPrice,
      quantity: quantity,
    };
    console.log("Order Data: ", orderData);
    toast.loading("Confirming Order", { id: sonarId });
    const res = await initialPayment(orderData).unwrap();
    console.log("Res: ", res);
    if (res?.url) {
      console.log("-----------------", res?.url);
      window.location.replace(res?.url);
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
                <div>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold">Price</p>
                    <p className="text-orange-600 text-lg font-bold">
                      ${cartItem?.bookId?.price}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold">Quantity: </p>
                    <p className="text-white text-lg font-bold">
                      {cartItem?.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    className="btn btn-sm btn-success text-white"
                    onClick={() =>
                      handleConfirmOrder(
                        cartItem._id,
                        cartItem?.bookId?._id,
                        cartItem?.bookId?.price,
                        cartItem?.quantity
                      )
                    }
                  >
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
