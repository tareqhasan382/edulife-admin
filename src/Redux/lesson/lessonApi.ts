import { baseApi } from "../api/baseApi";
// type QueryParams = {
//   limit: number;
//   page: number;
//   category?: string;
//   sortField?: string;
//   sortOrder?: string;
// };
export interface LessonResponse {
  _id: string;
  name: string;
  number: number;
  vocabularyCount: number;
}
export interface Lessons {
  data: LessonResponse[];
  message: string;
  statusCode: number;
  success: boolean;
}
export const lessonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLesson: build.mutation({
      query: (data) => ({
        url: "/lesson/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["lesson"],
    }),
    // lessons: build.query<Lessons, QueryParams>({
    //   query: (arg: QueryParams) => ({
    //     url: "/lesson",
    //     method: "GET",
    //     params: arg,
    //   }),
    //   providesTags: ["lesson"],
    // }),
    lessons: build.query({
      query: () => ({
        url: "/lesson",
        method: "GET",
      }),
      providesTags: ["lesson"],
    }),
    singlelesson: build.query({
      query: (id) => ({
        url: `/lesson/${id}`,
        method: "GET",
      }),
      providesTags: ["lesson"],
    }),
    deleteLesson: build.mutation({
      query: (id) => ({
        url: `/lesson/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["lesson"],
    }),
  }),
});

export const {
  useLessonsQuery,
  useCreateLessonMutation,
  useSinglelessonQuery,
  useDeleteLessonMutation,
} = lessonApi;
