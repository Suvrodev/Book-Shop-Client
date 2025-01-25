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
          url: "/products",
          method: "GET",
        };
      },
    }),
    getSingleBook: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
    }),
    getOwnBook: builder.query({
      query: (id) => {
        return {
          url: `/products/ownbook/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetAllBookQuery,
  useGetSingleBookQuery,
  useGetOwnBookQuery,
} = userManagementApi;
