import { lazy } from "react";
import { emptyNavPaths } from "../../utils/RoutingConstants";
const emptyNavPage = lazy(() => import("./index"));
const paths = [
  emptyNavPaths.offerDetails,
  emptyNavPaths.serviceCorner,
  emptyNavPaths.verifyAccount,
  emptyNavPaths.calculator,
];
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
  {
    path: emptyNavPaths.webinars,
    component: emptyNavPage,
    exact: true,
  },
  {
    path: emptyNavPaths.support,
    component: emptyNavPage,
    exact: true,
  },
  {
    path: emptyNavPaths.community,
    component: emptyNavPage,
    exact: true,
  },
  {
    path: emptyNavPaths.legalInfo,
    component: emptyNavPage,
    exact: true,
  },
];
