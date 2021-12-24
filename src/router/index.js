import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "../views/common/loader";
import { landingPageRouters } from "../views/landing/LandingRouter";
import { dashboardPageRouters } from "../views/dashboard/dashboardRouters";
import { loginAndRegisterPageRouters } from "../views/Register/RegisteRouter";
import { loginPageRouters } from "../views/Login/LoginRouter";
import LoaderWrapper from "./loaderWrapper";
import ScrollToTop from "./scrollToTop";
import PrivateRoute from "./PrivateRoute";

const LandingPage = React.lazy(() => import("../views/landing"));
const Invest = React.lazy(() => import("../views/dashboard/Invest/Invest"));
const WellBeing = React.lazy(() =>
  import("../views/dashboard/WellBeing/WellBeing")
);

function WaitingComponent(Component) {
  return (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}

export default function AppRouter({ ...props }) {
  let allPublicRoutes = [
    ...landingPageRouters,
    ...loginAndRegisterPageRouters,
    ...loginPageRouters,
  ];

  let allPrivateRoutes = [...dashboardPageRouters];

  return (
    <div className="app-router">
      <LoaderWrapper>
        <div className="router-layout">
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
              </Switch>
            </ScrollToTop>
          </Router>
        </div>
      </LoaderWrapper>
    </div>
  );
}
