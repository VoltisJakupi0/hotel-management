import { lazy, ReactElement, Suspense } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../common/components/PrivateRoute";
import React from "react";

const DashboardPage = lazy(() => import("./pages/DashboardOverview"));
const UsersPage = lazy(() => import("./pages/UsersPage"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const StatusPage = lazy(() => import("./pages/StatusPage"));
const RoomsPage = lazy(() => import("./pages/RoomsPage"));
const ReservationPage = lazy(() => import("./pages/ReservationPage"));

function Routes(): ReactElement {
  return (
    <Suspense fallback={<div>Bitte warten...</div>}>
      <Switch>
        <PrivateRoute path="/hotel" component={DashboardPage} />
        <PrivateRoute path="/users" component={UsersPage} />
        <PrivateRoute path="/categories" component={CategoriesPage} />
        <PrivateRoute path="/status" component={StatusPage} />
        <PrivateRoute path="/rooms" component={RoomsPage} />
        <PrivateRoute path="/reservation-rooms" component={ReservationPage} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
