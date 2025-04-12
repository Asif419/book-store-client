import {
  createApi,
  fetchBaseQuery,
 
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookshopbackend-henna.vercel.app/api",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      console.log("Authorization", token);
      if (token) {
        headers.set("Authorization",`Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: () => ({}),
});