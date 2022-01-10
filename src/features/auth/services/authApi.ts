import { api } from "../../../services/api";
import { User } from "../models/auth.model";

export interface GetLoginDataParams {
  email: string;
  passwd: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLoginData: build.mutation<User, GetLoginDataParams>({
      query(body) {
        return {
          url: "login",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useGetLoginDataMutation } = authApi;
