import React, { Children, ReactElement, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { setAuthUser } from "../authSlice";
import { getAuthToken } from "../utils/localStorage";

interface AuthHandlerProps {
  children: React.ReactNode;
}

function AuthHandler(props: AuthHandlerProps): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const authToken = getAuthToken();

  dispatch(setAuthUser(authToken));

  return <>{Children.only<ReactNode>(props.children)}</>;
}

export default AuthHandler;
