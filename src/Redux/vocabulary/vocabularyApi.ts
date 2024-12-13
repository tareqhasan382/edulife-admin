import { baseApi } from "../api/baseApi";
// type QueryParams = {
//   limit: number;
//   page: number;
//   category?: string;
//   sortField?: string;
//   sortOrder?: string;
// };
export interface VocabularyResponse {
  _id: string;
  word: string;
  pronunciation: string;
  meaning: string;
  whenToSay: string;
  lessonNo: number;
  lesson: string;
  adminEmail: string;
}
export interface Vocabulary {
  data: VocabularyResponse[];
  message: string;
  statusCode: number;
  success: boolean;
}
export const lessonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createVocabulary: build.mutation({
      query: (data) => ({
        url: "/vocabulary/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["lesson"],
    }),
    allVocabolary: build.query({
      query: () => ({
        url: "/vocabulary",
        method: "GET",
      }),
      providesTags: ["vocabulary"],
    }),
    vocabulary: build.query<
      Vocabulary,
      { lessonNo: number; limit: number; page: number }
    >({
      query: ({ lessonNo, limit, page }) => ({
        url: `/vocabulary/${lessonNo}`,
        method: "GET",
        params: {
          limit,
          page,
        },
      }),
      providesTags: ["vocabulary"],
    }),
    singleVocabolary: build.query({
      query: (id) => ({
        url: `/vocabulary/getById/${id}`,
        method: "GET",
      }),
      providesTags: ["vocabulary"],
    }),
    deleteVocabulary: build.mutation({
      query: (id) => ({
        url: `/vocabulary/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vocabulary", "lesson"],
    }),
  }),
});

export const {
  useVocabularyQuery,
  useSingleVocabolaryQuery,
  useCreateVocabularyMutation,
  useDeleteVocabularyMutation,
  useAllVocabolaryQuery,
} = lessonApi;
