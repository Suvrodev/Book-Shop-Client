import LoadingPage from "../../component/LoadingPage/LoadingPage";
import { useGetOwnBookQuery } from "../../Redux/api/features/Book/bookManagementApi";
import { useAppSelector } from "../../Redux/hooks";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
const MyBook = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading } = useGetOwnBookQuery(user?.id);
  console.log("User From My Book: ", user);
  const books = data?.data;
  console.log("Books: ", books);
  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1 className="text-xl font-bold">My Uploaded Book List</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Brand</th>
                <th>Author</th>
                <th>Category</th>
                <th>Model</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Available</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                books?.map((data: any, idx: number) => (
                  <tr key={idx}>
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
                      <button className="btn btn-sm btn-success text-white">
                        {" "}
                        <UpdateIcon />{" "}
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button className="btn btn-error text-white">
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBook;
