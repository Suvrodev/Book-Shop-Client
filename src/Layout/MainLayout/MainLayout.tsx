import { Outlet } from "react-router";
import DesktopHeader from "../../Pages/SharedPage/Header/DesktopHeader/DesktopHeader";
import MobileHeader from "../../Pages/SharedPage/Header/MobileHeader/MobileHeader";
import Footer from "../../Pages/SharedPage/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className=" md:hidden">
        <MobileHeader />
      </div>

      <div className="mx-0 md:mx-4">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
