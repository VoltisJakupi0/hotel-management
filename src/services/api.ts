import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT as apiEndpoint } from "../constants";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiEndpoint}/api/`,
  }),
  endpoints: () => ({}),
});
