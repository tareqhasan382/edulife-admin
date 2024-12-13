import { Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";
import SignIn from "../components/SignIn";
import Sidebar from "../components/SideBar";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/login";
  const auth = useAppSelector((state: RootState) => state.auth);
  if (auth?.user?.role !== "admin") {
    return <SignIn />;
  }
  return (
    <div className="bg-white overflow-hidden flex flex-row">
      {!isHomePage && (
        <div className="top-0 z-50 min-h-screen ">
          <Sidebar />
        </div>
      )}
      <div
        className={` mx-auto bg-light-white text-black w-full min-h-screen rounded ${
          isHomePage ? "w-full" : " p-7 "
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
