import { lazy } from "react";
import {dashboardPaths} from "../../utils/RoutingConstants"
const dashboardPage = lazy(() => import("./index"));


export const loadingPageRouters = [
    {
        path: dashboardPaths.dashboard,
        component:dashboardPage,
        exact:true
    },
]

