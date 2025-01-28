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
    getMyOrder: builder.query({
      query: (id: string) => {
        return {
          url: `/payment/payment/${id}`,
          method: "GET",
        };
      },
      providesTags: ["payment"],
    }),
    getAdminOrder: builder.query({
      query: (id: string) => {
        // console.log("Come id: ", id);
        return {
          url: `/cart/${id}`,
          method: "GET",
        };
      },
      providesTags: ["adminpayment"],
    }),
    deletePayment: builder.mutation({
      query: (id) => {
        return {
          url: `/payment/payment/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["adminpayment", "payment"],
    }),
  }),
});

export const {
  useInitialPayMutation,
  useGetMyOrderQuery,
  useDeletePaymentMutation,
} = paymentManagementApi;
