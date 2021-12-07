import { authUserSelector } from "../../../features/auth/selectors/auth.selectors";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";

interface PrivateRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

function PrivateRoute({ component: Component, ...rest }: any): ReactElement {
  const user = useSelector(authUserSelector);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <>
            <Sidebar />

            <main className="content">
              <Navbar />
              <Component {...props} />
              {/* <Footer
                toggleSettings={toggleSettings}
                showSettings={showSettings}
              /> */}
            </main>
          </>
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
