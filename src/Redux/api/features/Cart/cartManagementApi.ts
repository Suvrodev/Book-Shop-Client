import { baseApi } from "../../baseApi";

const cartManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCart: builder.mutation({
      query: (data) => {
        console.log("Data in Query: ", data);
        return {
          url: "/cart",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllCart: builder.query({
      query: () => {
        return {
          url: "/cart",
          method: "GET",
        };
      },
    }),
    deleteCart: builder.mutation({
      query: (id) => {
        return {
          url: `/cart/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useAddCartMutation, useGetAllCartQuery, useDeleteCartMutation } =
  cartManagementApi;
