import { ReactNode } from "react";
import { useAppSelector } from "../Redux/hooks";
import { Navigate } from "react-router";
interface IProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: IProps) => {
  const { token } = useAppSelector((state) => state.auth);

  //   console.log("Token in protected Route: ", token);

  if (!token) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
