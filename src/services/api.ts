import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  API_ENDPOINT as apiEndpoint,
  PROJECT_MANAGER_DEVELOPMENT_API as projectManagerEndpoint,
} from "../constants";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${apiEndpoint}/` }),
  endpoints: () => ({}),
});

export const projectManagerApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${projectManagerEndpoint}/`,
  }),
  endpoints: () => ({}),
});
