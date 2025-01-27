import { useParams } from "react-router";
import { useGetSingleBookQuery } from "../../Redux/api/features/Book/bookManagementApi";
import LoadingPage from "../../component/LoadingPage/LoadingPage";
import { useAddCartMutation } from "../../Redux/api/features/Cart/cartManagementApi";
import { toast } from "sonner";
import { useAppSelector } from "../../Redux/hooks";
import { sonarId } from "../../utils/Fucntion/sonarId";
import { TUser } from "../../utils/Types/GlobalType";

const BookDetail = () => {
  const [addCart] = useAddCartMutation();

  const { user } = useAppSelector((state) => state.auth);

  const { _id } = useParams(); // Correctly access _id
  //   console.log("The book ID is: ", _id);

  const { data, isLoading } = useGetSingleBookQuery(_id);
  const book = data?.data;
  console.log("Book: ", book);

  if (isLoading) {
    return <LoadingPage />;
  }

  const handleAddCart = async () => {
    if (!user) {
      toast.error("You have to logged in first", { id: sonarId });
      return;
    }
    const insertingDataIntoCart = {
      bookId: _id,
      userId: (user as TUser)._id,
    };
    console.log("Inserting data: ", insertingDataIntoCart);
    toast.loading("Inserting Cart", { id: sonarId });

    const res = await addCart(insertingDataIntoCart).unwrap();
    if (res.success) {
      toast.success(res?.message, { id: sonarId });
    }
  };
  return (
    <div>
      <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 text-white rounded-xl shadow-xl">
        <div className="flex flex-col md:flex-row items-center space-x-8">
          {/* Book Image Section */}
          <div className="flex-shrink-0">
            <img
              src={book?.imageUrl} // Replace with actual book image URL
              alt="Book Cover"
              className="rounded-lg shadow-lg w-64 h-96 object-cover"
            />
          </div>

          {/* Book Information Section */}
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-extrabold text-white">
              {book?.title}
            </h1>
            <h2 className="text-2xl font-semibold text-gray-200">
              {book?.category}
            </h2>
            <p className="text-lg text-gray-300">{book?.description}</p>

            <div className="flex items-center space-x-6 text-xl">
              <span className="text-green-400 font-bold">
                ${book?.price.toFixed(2)}
              </span>
              <span
                className={`text-lg font-semibold ${
                  book?.inStock ? "text-green-500" : "text-red-500"
                }`}
              >
                {book?.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="flex items-center space-x-6 text-lg">
              <div>
                <span className="font-semibold text-gray-200">Author: </span>
                <span className="text-gray-300">{book?.author}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-200">Brand: </span>
                <span className="text-gray-300">{book?.brand}</span>
              </div>
            </div>

            <div className="mt-6">
              {book?.inStock ? (
                <button
                  className="text-white btn btn-success"
                  onClick={() => handleAddCart()}
                >
                  Buy Now
                </button>
              ) : (
                <button className="text-white btn btn-error">
                  Out of Stock
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <h3 className="text-3xl font-semibold text-gray-100">
            More Information
          </h3>
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-200">Model: </span>
              <span className="text-gray-300">{book?.model}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-200">
                Quantity Available:{" "}
              </span>
              <span className="text-gray-300">{book?.quantity}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-200">
                Published On:{" "}
              </span>
              <span className="text-gray-300">
                {new Date(book?.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
