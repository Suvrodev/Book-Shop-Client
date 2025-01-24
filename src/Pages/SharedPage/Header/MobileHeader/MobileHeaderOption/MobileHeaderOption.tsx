import { NavLink } from "react-router";
const MobileHeaderOption = ({ handleClick }) => {
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
          to="/banner"
          onClick={() => handleClick(false)}
        >
          Banner
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/data"
          onClick={() => handleClick(false)}
        >
          Data
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "acLk ")}
          to="/imagecard"
          onClick={() => handleClick(false)}
        >
          Image Card
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
          to="/hdr"
        >
          Header
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
          to="/modal"
          onClick={() => handleClick(false)}
        >
          Modal
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "lk")}
          to="/contact"
          onClick={() => handleClick(false)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default MobileHeaderOption;
