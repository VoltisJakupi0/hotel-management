import { api } from "../../../services/api";
import { User } from "../models/auth.model";

export interface GetLoginDataParams {
  username: string;
  password: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLoginData: build.mutation<User, GetLoginDataParams>({
      query(params) {
        return {
          url: "getLoginData",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useGetLoginDataMutation } = authApi;
