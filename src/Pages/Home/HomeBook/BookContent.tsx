import { TBook } from "../../../utils/Types/GlobalType";

interface Iprops {
  book: TBook;
}
const BookContent = ({ book }: Iprops) => {
  //   console.log("book: ", book);
  const {
    author,
    brand,
    category,
    description,
    imageUrl,
    inStock,
    model,
    price,
    quantity,

    title,
  } = book;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const byUser: any = book?.refUser;
  return (
    <div className=" w-full md:w-[320px] p-4 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg text-white">
      {/* Book Image */}
      <div className="flex justify-center mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full md:w-[350px] h-[250px] object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Book Details */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-sm">
          <span className="font-semibold text-yellow-300">Author:</span>{" "}
          {author}
        </p>
        <p className="text-sm">
          <span className="font-semibold text-yellow-300">Brand:</span> {brand}
        </p>
        <p className="text-sm">
          <span className="font-semibold text-yellow-300">Category:</span>{" "}
          {category}
        </p>
        <p className="text-sm">
          <span className="font-semibold text-yellow-300">Model:</span> {model}
        </p>
        <p className="text-lg text-gray-100">{description}</p>

        {/* Price and Availability */}
        <div className="flex items-center justify-between py-4 border-t border-b border-gray-200">
          <span className="text-2xl font-bold text-yellow-300">
            ৳ {price.toLocaleString()}
          </span>
          <span
            className={`text-sm font-semibold ${
              inStock ? "text-green-300" : "text-red-400"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Additional Information */}
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-yellow-300">Quantity:</span>{" "}
            {quantity}
          </p>
          <p>
            <span className="font-semibold text-yellow-300">Ref User:</span>{" "}
            {byUser?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookContent;
