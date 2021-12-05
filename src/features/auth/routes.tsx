import React, { lazy, ReactElement, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));

const WelcomePage = lazy(() => import("./pages/Welcome/WelcomePage"));

const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));

function AuthRoutes(): ReactElement {
  return (
    <Suspense fallback={<div>Bitte warten...</div>}>
      <Switch>
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/auth/register" component={RegisterPage} />
        <Route path="/auth/login" component={LoginPage} />
      </Switch>
    </Suspense>
  );
}

export default AuthRoutes;
