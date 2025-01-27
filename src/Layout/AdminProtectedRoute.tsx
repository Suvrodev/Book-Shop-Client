import { ReactNode } from "react";
import { useAppSelector } from "../Redux/hooks";
import { Navigate } from "react-router";
import { verifyToken } from "../utils/Fucntion/verifyToken";

interface IProps {
  children: ReactNode;
}
const AdminProtectedRoute = ({ children }: IProps) => {
  const { token } = useAppSelector((state) => state.auth);
  //   console.log("Token in Admin Protected Route: ", token);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let user: any;
  if (token) {
    user = verifyToken(token);
  }
  //   console.log("Token User: ", user);

  if (!token) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  if (user?.role !== "admin") {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  return children;
};

export default AdminProtectedRoute;
