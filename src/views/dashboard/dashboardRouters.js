import { lazy } from "react";
import { dashboardPaths } from "../../utils/RoutingConstants";
const dashboardPage = lazy(() => import("./index"));

export const dashboardPageRouters = [
<<<<<<< HEAD
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
];
=======
    {
        path: dashboardPaths.dashboard,
        component:dashboardPage,
        exact:true
    },
    {
        path: dashboardPaths.invest,
        component:dashboardPage,
        exact:true
    },
    {
        path: dashboardPaths.wellbeing,
        component:dashboardPage,
        exact:true
    },
    {
        path: dashboardPaths.plan,
        component:dashboardPage,
        exact:true
    },
]

>>>>>>> aa7f9af6cc561d80667f0758064add622f5ee1ce
