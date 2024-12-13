import {
  ArrowLeft,
  LayoutDashboard,
  BookA,
  Shirt,
  Images,
  LogOut,
  LogIn,
} from "lucide-react";

import { useState } from "react";
import Couturelabs_logo from "../assets/Edulife.png";
import logo from "../assets/Edulife.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";
import { userLoggedOut } from "../Redux/auth/authSlice";
// import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
// import { RootState } from "../../Redux/store";
// import { userLoggedOut } from "../../Redux/auth/authSlice";
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state: RootState) => state.auth);

  const [open, setOpen] = useState<boolean>(true);
  return (
    <div
      className={`relative h-full bg-black text-white p-5 pt-8 duration-300 ${
        open ? "w-72" : "w-20"
      } `}
    >
      <ArrowLeft
        onClick={() => setOpen(!open)}
        className={`absolute bg-white text-black text-3xl rounded-full -right-3 top-9 border border-black cursor-pointer ${
          !open && " rotate-180 "
        }`}
      />
      <div className="w-full h-full text-black duration-300 py-4 overflow-y-auto overflow-x-hidden no-scrollbar ">
        <div className=" inline-flex items-center mb-5 ">
          <img
            src={logo}
            alt="Couturelabs_logo"
            className=" w-16 rounded cursor-pointer block float-left mr-2 p-1 "
          />
          <img
            src={Couturelabs_logo}
            alt="Couturelabs_logo"
            className={` w-40 origin-left  duration-300 ${!open && "scale-0"} `}
          />
        </div>

        <Link to="/">
          <div className=" inline-flex items-center my-2 ">
            <LayoutDashboard className=" bg-white text-4xl rounded cursor-pointer block float-left mr-2 p-1 " />
            <h1
              className={` text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              } `}
            >
              Dashboard
            </h1>
          </div>
        </Link>

        <Link to="/lesson">
          <div className=" items-center  my-2">
            <BookA className=" bg-white text-4xl rounded cursor-pointer block float-left mr-2 p-1 " />
            <h1
              className={` text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              } `}
            >
              Lesson
            </h1>
          </div>
        </Link>
        <Link to="/vocabulary">
          <div className=" items-center  my-2">
            <Shirt className=" bg-white text-4xl rounded cursor-pointer block float-left mr-2 p-1 " />
            <h1
              className={` text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              } `}
            >
              Vocabulary
            </h1>
          </div>
        </Link>
        <Link to="/tutorial">
          <div className=" items-center  my-2">
            <Images className=" bg-white text-4xl rounded cursor-pointer block float-left mr-2 p-1 " />
            <h1
              className={` text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              } `}
            >
              Tutorial
            </h1>
          </div>
        </Link>

        {auth?.user ? (
          <div
            onClick={() => dispatch(userLoggedOut())}
            className=" items-center cursor-pointer my-2"
          >
            <LogOut className=" bg-white text-4xl rounded  block float-left mr-2 p-1 " />
            <h1
              className={` text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              } `}
            >
              Log out
            </h1>
          </div>
        ) : (
          <Link to="/login">
            <div className=" items-center  my-2">
              <LogIn className=" bg-white text-4xl rounded cursor-pointer block float-left mr-2 p-1 " />
              <h1
                className={` text-white origin-left font-medium text-xl duration-300 ${
                  !open && "scale-0"
                } `}
              >
                Log in
              </h1>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
