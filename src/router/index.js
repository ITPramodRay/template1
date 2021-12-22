import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "../views/common/loader";
import { loadingPageRouters } from "../views/landing/LandingRouter";
import { loginAndRegisterPageRouters } from "../views/Register/RegisteRouter";
import { loginPageRouters } from "../views/Login/LoginRouter";
import LoaderWrapper from "./loaderWrapper";
import ScrollToTop from "./scrollToTop";

const LandingPage = React.lazy(() => import("../views/landing"));
const DashBoardPage = React.lazy(() => import("../views/dashboard"));

const Invest = React.lazy(() =>
  import("../views/dashboard/Invest/Invest")
);

function WaitingComponent(Component) {
  return (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}

export default function AppRouter({ ...props }) {
  const mainRoues = [
    {
      path: "/dashboard",
      component: WaitingComponent(DashBoardPage),
      exact: true,
    },
    {
      path: "/welcome",
      component: WaitingComponent(LandingPage),
      exact: true,
    },
    {
      path: "/dashboard/invest",
      component: WaitingComponent(Invest),
      exact: true,
    },
  ];

  let allRoutes = [
    ...mainRoues,
    ...loadingPageRouters,
    ...loginAndRegisterPageRouters,
    ...loginPageRouters,
  ];

  return (
    <div className="app-router">
      <LoaderWrapper>
        <div className="router-layout">
          <Router>
            <ScrollToTop>
              <Switch>
                {allRoutes.map((value, index) => {
                  return (
                    <Route
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
