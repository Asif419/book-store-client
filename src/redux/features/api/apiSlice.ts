import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookshopbackend-henna.vercel.app/api",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    // define endpoints later
    getALlProducts: builder.query({
      query: (filters) => ({
        url: "/product",
        params: {
          ...(filters.title && { title: filters.title }),
          ...(filters.searchTerm && { searchTerm: filters.searchTerm }),
          ...(filters.category && { category: filters.category }),
          ...(filters.author && { author: filters.author }),
          ...(filters.inStock !== null && { inStock: filters.inStock }),
          ...(filters.sort && { sort: filters.sort }),
          ...(filters.minPrice && { minPrice: filters.minPrice }),
          ...(filters.maxPrice && { maxPrice: filters.maxPrice }),
          ...(filters.page && { page: filters.page }),
          ...(filters.limit && { limit: filters.limit }),
        },
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useGetALlProductsQuery } = apiSlice;
