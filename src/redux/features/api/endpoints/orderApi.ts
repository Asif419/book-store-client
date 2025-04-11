import { apiSlice } from "../apiSlice";

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: "/order",
        method: "POST",
        body: { productId, quantity },
      }),
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
  overrideExisting: false,
});

export const { usePlaceOrderMutation, useGetAllOrdersQuery } = orderApi;
