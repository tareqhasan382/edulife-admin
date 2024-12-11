import { Link } from "react-router-dom";
import login from "../assets/login.jpg";
const SignUp = () => {
  return (
    <div className="lg:px-28 px-2 py-10 w-full h-auto bg-white flex flex-col items-center gap-10">
      <h1 className=" text-4xl font-bold ">Sign Up</h1>
      <div className=" w-full grid lg:grid-cols-2 items-center justify-center gap-10">
        <div className=" w-full h-auto ">
          <img
            src={login}
            alt="Login Image"
            className=" w-full h-full object-cover "
          />
        </div>
        <div>
          <form action="" className="  ">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="students_name"
                id="floating_student_name"
                className="block py-2.5 px-0 w-full text-sm md:text-base text-black font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                // required
              />
              <label
                className="peer-focus:font-bold absolute text-sm md:text-base font-bold text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor="floating_student_name"
              >
                Student&apos;s Name
                <span className=" text-red-500 text-sm md:text-base font-bold ">
                  *
                </span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="students_name"
                id="floating_student_name"
                className="block py-2.5 px-0 w-full text-sm md:text-base text-black font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                // required
              />
              <label
                className="peer-focus:font-bold absolute text-sm md:text-base font-bold text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor="floating_student_name"
              >
                Student&apos;s Name
                <span className=" text-red-500 text-sm md:text-base font-bold ">
                  *
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2.5 px-4 rounded-md mt-4"
            >
              Sign Up
            </button>
            <div>
              <h1>
                Already Have an account ? Please{" "}
                <Link to="/sign-in" className=" text-blue-600 underline ">
                  Sign In{" "}
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
