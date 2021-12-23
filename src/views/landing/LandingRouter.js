import React, { lazy } from "react";
import {landingPagePaths} from "../../utils/RoutingConstants"
// const LandingPage = lazy(() => import("./index"));
import LandingPage from "./index"

export const landingPageRouters = [
    {
        path: landingPagePaths.landingPage,
        component:LandingPage,
        exact:true
    },
]

