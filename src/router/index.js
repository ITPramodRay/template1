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
import {loadingPageRouters} from "../views/landing/LandingRouter"
import { loginAndRegisterPageRouters } from "../views/Login&Register/Login&RegisteRouter";
// import AppHeader from "../views/common/Header/Header";

const LandingPage = React.lazy(() => import("../views/landing"));
const DashBoardPage = React.lazy(() => import("../views/dashboard"));
const SignupPage = React.lazy(()=>import("../views/Login&Register/index"))

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
         
            <Router>
              {/* <AppHeader /> */}
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
               
                  {/* <Route exact path="/" component={WaitingComponent(LandingPage)} /> */}
                  {loginAndRegisterPageRouters.map((value,index)=>{
                    return(
                      <Route 
                        exact={value.exact}
                        path={value.path} 
                        component={WaitingComponent(value.component)} 
                        key={index}
                      />
                    )
                  })}
                  {loadingPageRouters.map((value,index)=>{
                    return(
                      <Route 
                        exact={value.exact}
                        path={value.path} 
                        component={WaitingComponent(value.component)} 
                        key={index}
                      />
                    )
                  })}
                </Switch>
              </ScrollToTop>
            </Router>
          </div>
       
      </LoaderWrapper>
    </div>
  );
}
