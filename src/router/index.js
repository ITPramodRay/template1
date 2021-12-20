import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import LoaderWrapper from "./loaderWrapper";
import Loader from "../views/common/loader";
import AppHeader from "../views/common/header";

const LandingPage = React.lazy(() => import("../views/landing"));
const DashBoardPage = React.lazy(() => import("../views/dashboard"));

function WaitingComponent(Component) {
  return (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}

export default function AppRouter({ ...props }) {
  return (
    <div className="app-router">
      <LoaderWrapper>
        <div className="router-layout">
          <div className="container">
            <Router>
              <AppHeader />
              <ScrollToTop>
                <Switch>
                  <Route
                    path="/dashboard"
                    component={WaitingComponent(DashBoardPage)}
                  />
                  <Route
                    path="/welcome"
                    component={WaitingComponent(LandingPage)}
                  />
                  <Route path="/" component={WaitingComponent(LandingPage)} />
                </Switch>
              </ScrollToTop>
            </Router>
          </div>
        </div>
      </LoaderWrapper>
    </div>
  );
}
