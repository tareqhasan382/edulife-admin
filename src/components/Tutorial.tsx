import { FaRegEdit } from "react-icons/fa";
import { IoTrashSharp } from "react-icons/io5";
import {
  TutorialResponse,
  useDeleteTutorialMutation,
  useTutorialQuery,
} from "../Redux/tutorials/tutorialApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Tutorial = () => {
  const { data } = useTutorialQuery();
  const [deleteTutorial] = useDeleteTutorialMutation();
  const handleDelete = async (id: string) => {
    try {
      const result = await deleteTutorial(id);
      if (result.error) {
        toast.error("deleting Faled");
      } else {
        toast.success("successfully deletion ");
      }
    } catch (error) {
      toast.error("deleting Faled");
      console.error("Unexpected error:", error);
    }
  };
  return (
    <div className="w-full h-auto bg-[#FDF8EE]">
      <div className="p-2 w-full h-full flex flex-col items-start">
        <div className=" w-full flex items-center  gap-10 ">
          <h1 className="text-2xl font-bold">Tutorials</h1>
          <Link to="add-tutorial">
            <button className=" px-3 py-1 rounded-lg bg-black text-white font-semibold text-sm ">
              Add Tutorial
            </button>
          </Link>
        </div>

        <div className="w-full h-full my-6 flex flex-col gap-6">
          {/* Enable horizontal scroll for the user table */}
          <div className="w-full overflow-x-auto flex flex-col gap-6">
            <div className="w-full grid grid-cols-5 items-center gap-6 min-w-[800px]">
              <h1>Video </h1>
              <h1>Title </h1>

              <h1 className=" px-2 ">description </h1>

              <h1>Action </h1>
            </div>
            {data?.data.map((tutorial: TutorialResponse) => (
              <div
                key={tutorial._id}
                className="w-full grid grid-cols-5 items-center gap-6 min-w-[800px]"
              >
                <iframe
                  src="https://www.youtube.com/embed/W0-hJ-9YG3I?si=ucWLnBHQPeYQU8wb"
                  title={tutorial?.title}
                  className=" w-full h-[80px] "
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <h1>{tutorial?.title} </h1>
                <h1>{tutorial?.description} </h1>

                {/* Individual role selection for each user */}
                <div className="flex items-center gap-3">
                  <button onClick={() => handleDelete(tutorial._id!)}>
                    <IoTrashSharp />
                  </button>
                  <button>
                    <FaRegEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
