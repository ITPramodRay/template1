import { lazy } from "react";
import { myAccountPaths } from "../../utils/RoutingConstants";
const myAccountPage = lazy(() => import("./index"));

export const myAccountPageRouters = [
  {
    path: myAccountPaths.myAccount,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myAccountPaths.verifyAccount,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myAccountPaths.calculator,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myAccountPaths.serviceCorner,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myAccountPaths.offerDetails,
    component: myAccountPage,
    exact: true,
  },
];
