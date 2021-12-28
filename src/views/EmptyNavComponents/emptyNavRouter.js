import { lazy } from "react";
import { emptyNavPaths } from "../../utils/RoutingConstants";
const emptyNavPage = lazy(() => import("./index"));

export const emptyNavPageRouter = [
  {
    path: emptyNavPaths.offerDetails,
    component: emptyNavPage,
    exact: true,
  },
  {
    path: emptyNavPaths.serviceCorner,
    component: emptyNavPage,
    exact: true,
  },
  {
    path: emptyNavPaths.verifyAccount,
    component: emptyNavPage,
    exact: true,
  },
  {
    path: emptyNavPaths.calculator,
    component: emptyNavPage,
    exact: true,
  },
 
];
