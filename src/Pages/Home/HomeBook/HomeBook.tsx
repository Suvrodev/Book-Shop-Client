import { Link } from "react-router";
import LoadingPage from "../../../component/LoadingPage/LoadingPage";
import { useGetHomeBookQuery } from "../../../Redux/api/features/Book/bookManagementApi";
import { TBook } from "../../../utils/Types/GlobalType";
import BookContent from "./BookContent";

const HomeBook = () => {
  const { data, isLoading } = useGetHomeBookQuery(undefined);
  const books = data?.data;
  //   console.log("Home Book: ", data);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1>Home Book</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-4">
        {books?.map((data: TBook, idx: number) => (
          <BookContent key={idx} book={data} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {books?.length > 0 && (
          <Link to={"/all-books"}>
            {" "}
            <button className="btn btn-primary text-white">View All</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomeBook;
