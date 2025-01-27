import { ReactNode } from "react";
import { useAppSelector } from "../Redux/hooks";
import { Navigate, useLocation } from "react-router";
import { verifyToken } from "../utils/Fucntion/verifyToken";

interface IProps {
  children: ReactNode;
}
const AdminProtectedRoute = ({ children }: IProps) => {
  const { token } = useAppSelector((state) => state.auth);
  //   console.log("Token in Admin Protected Route: ", token);

  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let user: any;
  if (token) {
    user = verifyToken(token);
  }
  //   console.log("Token User: ", user);

  if (!token) {
    return (
      <Navigate
        to={"/login"}
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }
  if (user?.role !== "admin") {
    return (
      <Navigate
        to={"/login"}
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }
  return children;
};

export default AdminProtectedRoute;
