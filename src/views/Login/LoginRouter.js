import { lazy } from "react";

import { LoginAndRegisterPagePaths } from "../../utils/RoutingConstants";

const Login = lazy(() => import("./index"));
const VerifyLoginOtp = lazy(() => import("./VerifyOtp/VerifyOtp"));
export const loginPageRouters = [
  {
    path: LoginAndRegisterPagePaths.loginPage,
    component: Login,
    exact: true,
  },
  {
    path: LoginAndRegisterPagePaths.forgetPassword,
    component: VerifyLoginOtp,
    exact: true,
  },
];
