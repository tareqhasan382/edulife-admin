import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashSharp } from "react-icons/io5";
import {
  useAllVocabolaryQuery,
  useDeleteVocabularyMutation,
  VocabularyResponse,
} from "../Redux/vocabulary/vocabularyApi";
import { Link } from "react-router-dom";
type QueryParams = {
  limit: number;
  page: number;
  filterField?: string;
};
const Vocabulary = () => {
  const [deleteVocabulary] = useDeleteVocabularyMutation();
  const [limit] = useState<number>(40);
  const [page] = useState<number>(1);

  const query: QueryParams = {
    limit,
    page,
  };
  const { data } = useAllVocabolaryQuery(query);

  return (
    <div className="w-full h-auto bg-[#FDF8EE]">
      <div className="p-2 w-full h-full flex flex-col items-start">
        <div className=" w-full flex items-center  gap-10 ">
          <h1 className="text-2xl font-bold">Vocabulary</h1>
          <Link to="add-vocabulary">
            <button className=" px-3 py-1 rounded-lg bg-black text-white font-semibold text-sm ">
              Add Vocabulary
            </button>
          </Link>
        </div>

        <div className="w-full h-full my-6 flex flex-col gap-6">
          {/* Enable horizontal scroll for the user table */}
          <div className="w-full overflow-x-auto flex flex-col gap-6">
            <div className="w-full grid grid-cols-5 items-center gap-6 min-w-[800px]">
              <h1>Number </h1>
              <h1>Word </h1>

              <h1 className=" px-2 ">Pronunciation </h1>
              <h1>Meaning </h1>
              <h1>Action </h1>
            </div>
            {data?.data.map((vocabulary: VocabularyResponse) => (
              <div
                key={vocabulary._id}
                className="w-full grid grid-cols-5 items-center gap-6 min-w-[800px]"
              >
                <h1>{vocabulary?.lessonNo} </h1>
                <h1>{vocabulary?.word} </h1>
                <h1>{vocabulary?.pronunciation} </h1>

                <h1 className=" px-2 ">{vocabulary?.meaning} </h1>

                {/* Individual role selection for each user */}
                <div className="flex items-center gap-3">
                  <button onClick={() => deleteVocabulary(vocabulary._id)}>
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

export default Vocabulary;
