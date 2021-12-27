import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "../views/common/loader";
import { landingPageRouters } from "../views/landing/LandingRouter";
import { dashboardPageRouters } from "../views/dashboard/dashboardRouters";
import { loginAndRegisterPageRouters } from "../views/Register/RegisteRouter";
import { loginPageRouters } from "../views/Login/LoginRouter";
// import { errorPageRouters } from "../views/common/Error/ErrorRoutes";
import LoaderWrapper from "./loaderWrapper";
import ScrollToTop from "./scrollToTop";
<<<<<<< HEAD
import PrivateRoute from "./PrivateRoute";
=======

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
>>>>>>> aa7f9af6cc561d80667f0758064add622f5ee1ce

function WaitingComponent(Component) {
  return (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}

export default function AppRouter({ ...props }) {
<<<<<<< HEAD
  let allPublicRoutes = [
=======
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
>>>>>>> aa7f9af6cc561d80667f0758064add622f5ee1ce
    ...landingPageRouters,
    ...loginAndRegisterPageRouters,
    ...loginPageRouters,
    // ...errorPageRouters,
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
<<<<<<< HEAD

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
=======
                <Route>
                 {WaitingComponent(error404)}
                </Route>
>>>>>>> aa7f9af6cc561d80667f0758064add622f5ee1ce
              </Switch>
            </ScrollToTop>
          </Router>
        </div>
      </LoaderWrapper>
    </div>
  );
}
