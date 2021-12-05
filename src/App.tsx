import React, { ReactElement, Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AuthHandler from "./features/auth/components/AuthHandler";
import AuthRoutes from "./features/auth/routes";
import ManagementRoutes from "./features/management/routes";
import MainRoutes from "./routes";
import NavigationMenu from "./features/common/components/NavigationMenu/NavigationMenu";
const ModalRoot = lazy(() => import("./features/modal/components/ModalRoot"));

function App(): ReactElement {
  return (
    <AuthHandler>
      <Router>
        <NavigationMenu>
          <MainRoutes />
          <AuthRoutes />
          <ManagementRoutes />
          <Suspense fallback={null}>
            <ModalRoot />
          </Suspense>
        </NavigationMenu>
      </Router>
    </AuthHandler>
  );
}

export default App;
