import { Link, Outlet, useLocation } from "react-router";
import { useAppDispatch } from "../../Redux/hooks";
import MenuIcon from "@mui/icons-material/Menu";
import WestIcon from "@mui/icons-material/West";
import { logout } from "../../Redux/api/features/auth/authSlice";
import { adminDashboards } from "../../utils/Array/adminDashboard";
import { useTitle } from "../../component/hook/useTitle";

const AdminDashboard = () => {
  useTitle("Admin Dashboard");
  const dispatch = useAppDispatch();
  const location = useLocation()?.pathname;
  return (
    <div>
      {/* Dashboard Header */}
      <div className="text-xl font-bold text-center bg-green-600 py-4 px-4 flex">
        <div className="w-[33%] flex justify-start">
          {/* Menu Icon */}
          <label className="md:hidden" htmlFor="my-drawer-2">
            <MenuIcon className="cursor-pointer lg:hidden text-white" />
          </label>
        </div>
        <p className="w-[33%] text-white">This is Suvrodeb Book-Shop</p>
        <div className="w-[33%]"></div>
      </div>

      {/* Start Drawer */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="mx-4">
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
            {/* Sidebar content */}
            <div className="flex gap-x-4 items-center mb-6">
              <div className="bg-white text-black p-1 rounded-full">
                <Link to={"/"}>
                  <WestIcon />
                </Link>
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
            </div>

            <div className="flex flex-col gap-4 my-4">
              {adminDashboards.map((data) => (
                <Link
                  key={data?.path}
                  to={data?.path}
                  className={`dashboardLink text-lg font-medium py-2 px-4 rounded-lg ${
                    location === data?.path
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  {data?.text}
                </Link>
              ))}

              <div>
                <button
                  className="btn btn-error text-white relative left-4 py-2 px-4 rounded-md mt-4"
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

export default AdminDashboard;
