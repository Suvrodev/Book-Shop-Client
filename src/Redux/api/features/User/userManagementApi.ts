import { baseApi } from "../../baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => {
        return {
          url: "/products/",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllBook: builder.query({
      query: () => {
        return {
          url: "/students",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useAddBookMutation, useGetAllBookQuery } = userManagementApi;
