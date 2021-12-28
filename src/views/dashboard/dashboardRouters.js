import { lazy } from "react";
import { dashboardPaths } from "../../utils/RoutingConstants";
const dashboardPage = lazy(() => import("./index"));

export const dashboardPageRouters = [
  {
    path: dashboardPaths.dashboard,
    component: dashboardPage,
    exact: true,
  },
  {
    path: dashboardPaths.invest,
    component: dashboardPage,
    exact: true,
  },
  {
    path: dashboardPaths.wellbeing,
    component: dashboardPage,
    exact: true,
  },
  {
    path: dashboardPaths.plan,
    component: dashboardPage,
    exact: true,
  },
  {
    path: dashboardPaths.myprofile,
    component: dashboardPage,
    exact: true,
  },
  {
    path: dashboardPaths.offerdetail,
    component: dashboardPage,
    exact: true,
  },
];
