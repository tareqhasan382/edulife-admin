import { Link, useNavigate } from "react-router-dom";
import { useCreateMutation } from "../Redux/tutorials/tutorialApi";
import { useState } from "react";
import { toast } from "react-toastify";
export interface LessonData {
  url: string;
  title: string;
  description: string;
}
const AddTutorial = () => {
  const [create, { isLoading, isError }] = useCreateMutation();
  const navigate = useNavigate();
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data: LessonData = {
        url,
        title,
        description,
      };
      const result = await create(data).unwrap();

      if (result) {
        toast.success("created Lesson successful");
        navigate("/tutorial");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("create Lesson failed. Please try again.");
    }
  };
  return (
    <div>
      <div className="w-full h-auto bg-[#FDF8EE]">
        <div className="p-2 w-full h-full flex flex-col items-start">
          <div className=" w-full flex items-center  gap-10 ">
            <h1 className="text-2xl font-bold">Add Tutorial</h1>
            <Link to="/tutorial">
              <button className=" px-3 py-1 rounded-lg bg-black text-white font-semibold text-sm ">
                Back
              </button>
            </Link>
          </div>

          <div className="w-full h-full my-6 flex flex-col gap-6">
            {/* Enable horizontal scroll for the user table */}
            <div className="w-full overflow-x-auto flex flex-col gap-6">
              <div className="w-full overflow-x-auto grid lg:grid-cols-2 grid-cols-1 items-center gap-6 min-w-[800px]">
                <form onSubmit={handleSubmit} className=" w-full p-2 ">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="url"
                      name="url"
                      id="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="block py-2.5 px-0 w-full text-sm md:text-base text-black font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      // required
                    />
                    <label
                      className="peer-focus:font-bold absolute text-sm md:text-base font-bold text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      htmlFor="url"
                    >
                      Url
                      <span className=" text-red-500 text-sm md:text-base font-bold ">
                        *
                      </span>
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="title"
                      id="url"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="block py-2.5 px-0 w-full text-sm md:text-base text-black font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      // required
                    />
                    <label
                      className="peer-focus:font-bold absolute text-sm md:text-base font-bold text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      htmlFor="title"
                    >
                      Title
                      <span className=" text-red-500 text-sm md:text-base font-bold ">
                        *
                      </span>
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="block py-2.5 px-0 w-full text-sm md:text-base text-black font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      // required
                    />
                    <label
                      className="peer-focus:font-bold absolute text-sm md:text-base font-bold text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      htmlFor="description"
                    >
                      Description
                      <span className=" text-red-500 text-sm md:text-base font-bold ">
                        *
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-black text-white font-bold py-2.5 px-4 rounded-md mt-4"
                  >
                    {isLoading ? "Loding ..." : "Submit"}
                  </button>
                </form>
                {isError && (
                  <p className="text-red-500 mt-2">
                    Create failed. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTutorial;
