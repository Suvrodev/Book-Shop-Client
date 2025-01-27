import { useState } from "react";
import LoadingPage from "../../component/LoadingPage/LoadingPage";
import { useGetAllBookQuery } from "../../Redux/api/features/Book/bookManagementApi";

import { useNavigate } from "react-router";
import { TBook } from "../../utils/Types/GlobalType";

const AllBooks = () => {
  const { data: bookData, isLoading } = useGetAllBookQuery(undefined);
  const books = bookData?.data || [];
  // console.log("All Books: ", books);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  //Go Detail
  const handleGoDetail = (_id: string) => {
    navigate(`/book-detail/${_id}`);
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">All Books</h1>

      <div className="flex justify-center gap-4 my-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title, author, or category"
          className="py-3 px-4 rounded-md border bg-white border-purple-500 w-10/12 md:w-1/4"
        />
        <button className="btn btn-primary text-white">Search</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Title</th>
                <th>Brand</th>
                <th>Author</th>
                <th>Category</th>
                <th>Model</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Available</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {books?.map((data: TBook, idx: number) => (
                <tr key={idx}>
                  <th> {idx} </th>
                  <th>
                    {" "}
                    <img
                      src={data?.imageUrl}
                      alt=""
                      className="w-[65px] h-[40px]"
                    />{" "}
                  </th>
                  <td>{data?.title}</td>
                  <td>{data?.brand}</td>
                  <td>{data?.author}</td>
                  <td>{data?.category}</td>
                  <td>{data?.model}</td>
                  <td>{data?.price}</td>
                  <td>{data?.quantity}</td>
                  <td>{data?.inStock ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success text-white"
                      onClick={() => handleGoDetail(data?._id)}
                    >
                      Go Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
