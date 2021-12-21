import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "../views/common/loader";
import { loadingPageRouters } from "../views/landing/LandingRouter";
import { loginAndRegisterPageRouters } from "../views/Login&Register/Login&RegisteRouter";
import LoaderWrapper from "./loaderWrapper";
import ScrollToTop from "./scrollToTop";

const LandingPage = React.lazy(() => import("../views/landing"));
const DashBoardPage = React.lazy(() => import("../views/dashboard"));
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
  ];

  let allRoutes = [
    ...mainRoues,
    ...loadingPageRouters,
    ...loginAndRegisterPageRouters,
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
