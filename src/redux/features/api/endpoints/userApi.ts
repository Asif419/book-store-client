import { apiSlice } from "../apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/auth/change-password",
        method: "POST",
        body,
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    blockUser: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useResetPasswordMutation,
  useGetAllUserQuery,
  useBlockUserMutation,
} = userApi;
