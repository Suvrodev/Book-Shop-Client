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
      invalidatesTags: ["book"],
    }),
    getAllBook: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags: ["book"],
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
      providesTags: ["book"],
    }),
    getBookImages: builder.query({
      query: () => {
        return {
          url: `/products/images/book`,
          method: "GET",
        };
      },
    }),
    getHomeBook: builder.query({
      query: () => {
        return {
          url: `/products/images/book/home`,
          method: "GET",
        };
      },
      providesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ({ id, updateData }) => {
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: updateData,
        };
      },
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetAllBookQuery,
  useGetSingleBookQuery,
  useGetOwnBookQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetBookImagesQuery,
  useGetHomeBookQuery,
} = userManagementApi;
