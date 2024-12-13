import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const BASEURL = "https://edulife-backend.vercel.app/api/v1/"; //"http://localhost:8000/api/v1/";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    prepareHeaders: (headers) => {
      const authString = localStorage.getItem("edulifeAuth");
      // console.log("authString:", authString);
      const auth = authString ? JSON.parse(authString) : null;
      // console.log("auth:", auth);
      const token = auth ? auth.accessToken : null;
      if (token) {
        // console.log("token:", token);
        headers.set("Authorization", `${token}`);
      }
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["auth", "lesson", "vocabulary", "tutorial"],
});

export default baseApi;
