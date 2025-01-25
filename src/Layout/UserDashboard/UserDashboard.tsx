import MenuIcon from "@mui/icons-material/Menu";
import "./UserDashboard.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";

const UserDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handle drawer state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDrawerOpen(true); // Open drawer for md and larger screens
      } else {
        setDrawerOpen(false); // Close drawer for smaller screens
      }
    };

    // Initialize the state on first render
    handleResize();

    // Attach event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div>
      {/* Header */}
      <div className="text-xl font-bold text-center bg-green-600 py-4 px-4 flex">
        <div className="w-[33%] flex justify-start">
          {/* Menu Icon */}
          <MenuIcon
            onClick={toggleDrawer}
            className="cursor-pointer lg:hidden"
          />
        </div>
        <p className="w-[33%]">This is Suvrodeb Book-Shop</p>
        <div className="w-[33%]"></div>
      </div>

      {/* Drawer */}
      <div className={`drawer ${drawerOpen ? "drawer-open" : ""}`}>
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          readOnly
        />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={toggleDrawer}
          ></label>
          <div className="menu bg-base-200 text-base-content min-h-full w-80 py-4 px-10 flex flex-col gap-3">
            <h1 className="text-xl font-bold">User Dashboard</h1>

            <div className=" flex flex-col gap-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500 dashboardLink" : "dashboardLink "
                }
                to="/user-dashboard"
              >
                My Profile
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500 dashboardLink" : "dashboardLink "
                }
                to="/user-dashboard"
              >
                My Book
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500 dashboardLink" : "dashboardLink "
                }
                to="/user-dashboard"
              >
                My Cart
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500 dashboardLink" : "dashboardLink "
                }
                to="/user-dashboard"
              >
                My Order
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
