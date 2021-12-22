import { lazy } from "react";
import { LoginAndRegisterPagePaths } from "../../utils/RoutingConstants";
const Login = lazy(() => import("./index"));

export const loginPageRouters = [
  {
    path: LoginAndRegisterPagePaths.loginPage,
    component: Login,
    exact: true,
  },
];
