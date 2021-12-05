import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { authFeatureName, AuthState } from "../authSlice";
import { User } from "../models/auth.model";

export const authStateSelector = (state: RootState): AuthState =>
  state[authFeatureName];

export const authUserSelector = createSelector(
  authStateSelector,
  (state) => state.user
);
