import { baseApi } from "../../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => {
        console.log("Data in redux: ", data);
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation } = authApi;
