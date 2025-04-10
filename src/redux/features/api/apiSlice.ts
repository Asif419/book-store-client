import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bookshopbackend-henna.vercel.app/api" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/product',
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: '/books',
        method: 'POST',
        body: newBook,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
} = apiSlice;