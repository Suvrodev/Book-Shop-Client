import LoadingPage from "../../component/LoadingPage/LoadingPage";
import { useGetMyCartQuery } from "../../Redux/api/features/Cart/cartManagementApi";
import { useAppSelector } from "../../Redux/hooks";
import { TUser } from "../../utils/Types/GlobalType";

const MyCart = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading } = useGetMyCartQuery((user as TUser)?.id);
  const carts = data?.data;
  console.log("Carts: ", carts);
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
          {carts.map((cartItem: any, idx: number) => (
            <div
              key={idx}
              className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-6"
            >
              {/* Cart Item Image */}
              <div className="w-32 h-48">
                <img
                  src="https://via.placeholder.com/200x300" // Replace with book image URL
                  alt={cartItem?.bookId?.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Cart Item Details */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {cartItem.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  by {cartItem?.bookId?.author}
                </p>
                <p className="text-gray-500 text-sm">
                  {cartItem?.bookId?.category}
                </p>
                <p className="text-green-500 text-lg font-bold">
                  ${cartItem?.bookId?.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;
