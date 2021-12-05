import React from "react";
import useHasAdminRole from "../../auth/hooks/useHasAdminRole";

import Dashboard from "../components/Dashboard";
import BasicView from "../components/BasicView/BasicView";

export default () => {
  const isAdmin = useHasAdminRole();
  return (
    <>
      {isAdmin && <Dashboard />}
      {!isAdmin && <BasicView />}
    </>
  );
};
