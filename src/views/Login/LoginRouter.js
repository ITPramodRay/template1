import { lazy } from "react";

import { LoginAndRegisterPagePaths } from "../../utils/RoutingConstants";

const Login = lazy(() => import("./index"));
const VerifyLoginOtp = lazy(() => import("./VerifyOtp/VerifyOtp"));
const UpdatePassword = lazy(() => import("./UpdatePassword/UpdatePassword"));

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
  {
    path: LoginAndRegisterPagePaths.UpdatePassword,
    component: UpdatePassword,
    exact: true,
  },
];
