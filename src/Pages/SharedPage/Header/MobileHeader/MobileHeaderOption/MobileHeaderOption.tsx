import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router";
import { useAppSelector } from "../../../../../Redux/hooks";
import DashboardCart from "../../DesktopHeader/DashboardCart";
import DashboradButton from "../../DesktopHeader/DashboradButton";
import { logout } from "../../../../../Redux/api/features/auth/authSlice";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MobileHeaderOption = ({ handleClick }: any) => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="bg-green-500 text-white flex flex-col gap-4 px-5 py-5 relative z-10">
      <div className="flex flex-col gap-4 font-bold w-full  ">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/home"
          onClick={() => handleClick(false)}
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/all-books"
          onClick={() => handleClick(false)}
        >
          All Book
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/about-us"
          onClick={() => handleClick(false)}
        >
          About Us
        </NavLink>

        <div className="w-[25%]  flex justify-end items-center 0">
          {token ? (
            <div className=" flex items-center gap-x-3">
              <DashboardCart />
              <DashboradButton />
              <button
                className=" btn btn-warning text-white "
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className=" btn btn-primary text-white ">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderOption;
