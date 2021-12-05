import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { api } from "../services/api";
import authReducer, { authFeatureName } from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [authFeatureName]: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): ReturnType<typeof useDispatch> =>
  useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
