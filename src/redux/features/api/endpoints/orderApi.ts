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
  }),
  overrideExisting: false,
});

export const { usePlaceOrderMutation } = orderApi;