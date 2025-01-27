import { ReactNode } from "react";
import { useAppSelector } from "../Redux/hooks";
import { Navigate, useLocation } from "react-router";
interface IProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: IProps) => {
  const { token } = useAppSelector((state) => state.auth);

  //   console.log("To--*/ken in protected Route: ", token);
  const location = useLocation();

  if (!token) {
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

export default ProtectedRoute;
