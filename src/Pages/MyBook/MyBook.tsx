import LoadingPage from "../../component/LoadingPage/LoadingPage";
import {
  useDeleteBookMutation,
  useGetOwnBookQuery,
} from "../../Redux/api/features/Book/bookManagementApi";
import { useAppSelector } from "../../Redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";
import { sonarId } from "../../utils/Fucntion/sonarId";
import UpdateBook from "../UpdateBook/UpdateBook";
import { TBook } from "../../utils/Types/GlobalType";
const MyBook = () => {
  const [deleteBook] = useDeleteBookMutation();
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading } = useGetOwnBookQuery(user?.id);
  // console.log("User From My Book: ", user);
  const books = data?.data;
  // console.log("Books: ", books);

  const handelDeleteBook = async (id: string) => {
    toast.loading("Deleting Book", { id: sonarId });
    const res = await deleteBook(id).unwrap();
    console.log("Res: ", res);
    if (res?.status) {
      toast.success("Book deleted successfully", { id: sonarId });
    }
  };
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
              {books?.map((data: TBook, idx: number) => (
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
                      <UpdateBook bookInfo={data} />
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-error text-white"
                      onClick={() => handelDeleteBook(data?._id)}
                    >
                      <DeleteIcon />
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

export default MyBook;
