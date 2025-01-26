import MenuIcon from "@mui/icons-material/Menu";
import "./UserDashboard.css";
import { Link, Outlet, useLocation } from "react-router";
import { userDashboards } from "../../utils/Array/userDashboard";
import WestIcon from "@mui/icons-material/West";
import { useAppDispatch } from "../../Redux/hooks";
import { logout } from "../../Redux/api/features/auth/authSlice";

const UserDashboard = () => {
  const dispatch = useAppDispatch();
  const location = useLocation()?.pathname;
  //   console.log("Location: ", location);
  return (
    <div>
      {/* Dashboard Header */}
      <div className="text-xl font-bold text-center bg-green-600 py-4 px-4 flex">
        <div className="w-[33%] flex justify-start">
          {/* Menu Icon */}
          <label className="md:hidden" htmlFor="my-drawer-2">
            <MenuIcon
              // onClick={toggleDrawer}
              className="cursor-pointer lg:hidden"
            />
          </label>
        </div>
        <p className="w-[33%]">This is Suvrodeb Book-Shop</p>
        <div className="w-[33%]"></div>
      </div>

      {/* Start Drawer */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <div className="mx-4">
            <h1>Dash Board er পেট</h1>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div className="flex gap-x-4 items-center">
              <div className="bg-white text-black p-1 rounded-full">
                <Link to={"/"}>
                  <WestIcon />
                </Link>
              </div>
              <h1 className="text-xl font-bold">User Dashboard</h1>
            </div>

            <div className=" flex flex-col ic gap-2 my-4">
              {userDashboards.map((data) => (
                <Link
                  key={data?.path}
                  to={data?.path}
                  className={`dashboardLink ${
                    location === data?.path ? "text-blue-600" : ""
                  }`}
                >
                  {" "}
                  {data?.text}{" "}
                </Link>
              ))}
              <div>
                <button
                  className="btn btn-error text-white relative left-4"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
