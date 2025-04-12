import { apiSlice } from "../apiSlice";

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: "/order",
        method: "POST",
        body: { productId, quantity },
      }),
      invalidatesTags: ["order"],
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
    updateOrder: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/order/${id}`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["order"],
    }),
  }),
  overrideExisting: false,
});

export const {
  usePlaceOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
