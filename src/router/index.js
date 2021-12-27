import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "../views/common/loader";
import { landingPageRouters } from "../views/landing/LandingRouter";
import { dashboardPageRouters } from "../views/dashboard/dashboardRouters";
import { loginAndRegisterPageRouters } from "../views/Register/RegisteRouter";
import { loginPageRouters } from "../views/Login/LoginRouter";
import LoaderWrapper from "./loaderWrapper";
import ScrollToTop from "./scrollToTop";

const LandingPage = React.lazy(() => import("../views/landing"));
const Invest = React.lazy(() =>
  import("../views/dashboard/Invest/Invest")
);
const WellBeing = React.lazy(() =>
  import("../views/dashboard/WellBeing/WellBeing")
);
const error404 = React.lazy(() =>
  import("../views/common/Error/Error404")
);
const InternetError = React.lazy(() =>
  import("../views/common/Error/InternetError")
);
const Mailmverify = React.lazy(() =>
  import("../views/common/Error/Mailmverify")
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
      path: "/welcome",
      component: WaitingComponent(LandingPage),
      exact: true,
    },
    // {
    //   path: "/dashboard/wellBeing",
    //   component: WaitingComponent(WellBeing),
    //   exact: true,
    // },
    // {
    //   path: "/dashboard/invest",
    //   component: WaitingComponent(Invest),
    //   exact: true,
    // },
   
    {
      path: "/interneterror",
      component: WaitingComponent(InternetError),
      exact: true,
    },
    {
      path: "/emailverify",
      component: WaitingComponent(Mailmverify),
      exact: true,
    },
  ];

  let allRoutes = [
    ...mainRoues,
    ...landingPageRouters,
    ...dashboardPageRouters,
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
                <Route>
                 {WaitingComponent(error404)}
                </Route>
              </Switch>
            </ScrollToTop>
          </Router>
        </div>
      </LoaderWrapper>
    </div>
  );
}
