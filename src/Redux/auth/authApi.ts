import { baseApi } from "../api/baseApi";
import { userLoggedIn } from "./authSlice";
import { jwtDecode } from "jwt-decode";
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log(
          //   "queryFulfilled result:",
          //   result?.data?.data?.accessToken
          // );
          const user = jwtDecode(result?.data?.data?.accessToken);
          // console.log("user token:",user)
          // localStorage.setItem(
          //   "womensAuth",
          //   JSON.stringify({
          //     accessToken: result?.data?.token,
          //     user: user,
          //   })
          // );

          dispatch(
            userLoggedIn({
              accessToken: result?.data?.data?.accessToken,
              user: user,
            })
          );
        } catch (err) {
          console.log("something went to wrong", err);
          // do nothing
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
