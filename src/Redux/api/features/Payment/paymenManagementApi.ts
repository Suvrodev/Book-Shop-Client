//http://localhost:5000/api/payment/initiate

import { baseApi } from "../../baseApi";

const paymentManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    initialPay: builder.mutation({
      query: (data) => {
        console.log("Data in Query: ", data);
        return {
          url: "/payment/initiate",
          method: "POST",
          body: data,
        };
      },
    }),
    getMyCart: builder.query({
      query: (id: string) => {
        // console.log("Come id: ", id);
        return {
          url: `/cart/${id}`,
          method: "GET",
        };
      },
    }),
    deleteCart: builder.mutation({
      query: (id) => {
        console.log("Come cart id for delete: ", id);
        return {
          url: `/cart/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useInitialPayMutation } = paymentManagementApi;
