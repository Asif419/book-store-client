import { apiSlice } from "../apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<any, void>({ query: () => "/product" }),
    getBookById: builder.query({
      query: (id) => `/product/${id}`,
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
    }),
    
  }),
  overrideExisting: false,
});

export const { useGetBooksQuery, useAddBookMutation, useGetBookByIdQuery } = bookApi;