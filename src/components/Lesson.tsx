import { IoTrashSharp } from "react-icons/io5";
import {
  LessonResponse,
  useDeleteLessonMutation,
  useLessonsQuery,
} from "../Redux/lesson/lessonApi";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
type QueryParams = {
  limit: number;
  page: number;
  filterField?: string;
};
const Lesson = () => {
  const [limit] = useState<number>(40);
  const [page] = useState<number>(1);

  const query: QueryParams = {
    limit,
    page,
  };
  const { data } = useLessonsQuery(query);
  const [deleteLesson] = useDeleteLessonMutation();
  const handleDelete = async (id: string) => {
    try {
      const result = await deleteLesson(id);
      if (result.error) {
        toast.error("deleting Faled");
      } else {
        toast.success("successful deletion");
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
          <h1 className="text-2xl font-bold">Lesson</h1>
          <Link to="add-lesson">
            <button className=" px-3 py-1 rounded-lg bg-black text-white font-semibold text-sm ">
              Add Lesson
            </button>
          </Link>
        </div>

        <div className="w-full h-full my-6 flex flex-col gap-6">
          {/* Enable horizontal scroll for the user table */}
          <div className="w-full overflow-x-auto flex flex-col gap-6">
            <div className="w-full grid grid-cols-5 items-center gap-6 min-w-[800px]">
              <h1>Number </h1>
              <h1>Name </h1>

              <h1 className=" px-2 ">vocabularyCount </h1>
              <h1>Action </h1>
            </div>
            {data?.data.map((user: LessonResponse) => (
              <div
                key={user._id}
                className="w-full grid grid-cols-5 items-center gap-6 min-w-[800px]"
              >
                <h1>{user?.number} </h1>
                <h1>{user?.name} </h1>

                <h1 className=" px-2 ">{user?.vocabularyCount} </h1>

                {/* Individual role selection for each user */}
                <div className="flex items-center gap-3">
                  <button onClick={() => handleDelete(user?._id)}>
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

export default Lesson;
