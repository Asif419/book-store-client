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
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "POST",
      }),
    }),
    updateOrder: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/order/${id}`,
        method: "POST",
        body: payload,
      }),
    }),
    getOwnOrders: builder.query<any, void>({
      query: () => ({
        url: "/order/own_order",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  usePlaceOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useGetOwnOrdersQuery,
} = orderApi;
