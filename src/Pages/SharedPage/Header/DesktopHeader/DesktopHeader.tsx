import { Link, NavLink } from "react-router";
import logo from "../../../../assets/Logo/Logo.png";
import { useAppSelector } from "../../../../Redux/hooks";
import { useDispatch } from "react-redux";
import { logout } from "../../../../Redux/api/features/auth/authSlice";

const DesktopHeader = () => {
  const { token, user } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="p-2  text-white  bg-[#0F172A] flex justify-between items-center px-10 relative z-10">
      <div className=" w-[25%]">
        <img src={logo} alt="" className="w-[75px] h-[75px] rounded-full" />
      </div>
      <div className="flex justify-center  gap-4 font-bold w-[50%] ">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/add-book"
        >
          Add Book
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/all-books"
        >
          All Book
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/mycart"
        >
          My Cart
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/about-us"
        >
          About Us
        </NavLink>
      </div>

      <div className="w-[25%]  flex justify-end items-center 0">
        {token ? (
          <div className=" flex items-center gap-x-3">
            <h1> {user?.name}</h1>
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
  );
};

export default DesktopHeader;
