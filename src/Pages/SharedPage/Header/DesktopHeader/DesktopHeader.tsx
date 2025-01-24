import { Link, NavLink } from "react-router";
import logo from "../../../../assets/Logo/Logo.png";

const DesktopHeader = () => {
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
          to="/product-detail"
        >
          Product Detail
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/about-us"
        >
          About Us
        </NavLink>
      </div>

      <div className="w-[25%]  flex justify-end items-center">
        <Link to={"/login"}>
          {" "}
          <button className=" btn btn-primary text-white ">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default DesktopHeader;
