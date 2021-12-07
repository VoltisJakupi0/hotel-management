import React, { lazy, ReactElement, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));

function AuthRoutes(): ReactElement {
  return (
    <Suspense fallback={<div>Bitte warten...</div>}>
      <Switch>
        <Route path="/auth/login" component={LoginPage} />
      </Switch>
    </Suspense>
  );
}

export default AuthRoutes;
