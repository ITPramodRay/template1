import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "../views/common/loader";
import { landingPageRouters } from "../views/landing/LandingRouter";
import { dashboardPageRouters } from "../views/dashboard/dashboardRouters";
import { myAccountPageRouters } from "../views/MyAccount/myAccountRouter";
import { loginAndRegisterPageRouters } from "../views/Register/RegisteRouter";
import { loginPageRouters } from "../views/Login/LoginRouter";
// import { errorPageRouters } from "../views/common/Error/ErrorRoutes";
import LoaderWrapper from "./loaderWrapper";
import ScrollToTop from "./scrollToTop";
import PrivateRoute from "./PrivateRoute";

function WaitingComponent(Component) {
  return (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}

export default function AppRouter({ ...props }) {
  const error404 = React.lazy(() => import("../views/common/Error/Error404"));

  let allPublicRoutes = [
    ...landingPageRouters,
    ...loginAndRegisterPageRouters,
    ...loginPageRouters,
    ...myAccountPageRouters
    // ...errorPageRouters,
  ];

  let allPrivateRoutes = [...dashboardPageRouters];

  return (
    <div className="app-router">
      <LoaderWrapper>
        <div className="router-layout">
          {console.log(allPublicRoutes)}
          <Router>
            <ScrollToTop>
              <Switch>
                {allPublicRoutes.map((value, index) => {
                  return (
                    <Route
                      exact={value.exact}
                      path={value.path}
                      component={WaitingComponent(value.component)}
                      key={index}
                    />
                  );
                })}

                {allPrivateRoutes.map((value, index) => {
                  
                  return (
                    <PrivateRoute
                      exact={value.exact}
                      path={value.path}
                      component={WaitingComponent(value.component)}
                      key={index}
                    />
                  );
                })}
                <Route>{WaitingComponent(error404)}</Route>
              </Switch>
            </ScrollToTop>
          </Router>
        </div>
      </LoaderWrapper>
    </div>
  );
}
