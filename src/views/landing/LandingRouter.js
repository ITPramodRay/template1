import React, { lazy } from "react";
import {landingPagePaths} from "../../utils/RoutingConstants"
const LandingPage = lazy(() => import("./index"));


export const loadingPageRouters = [
    {
        path: landingPagePaths.landingPage,
        component:LandingPage,
        exact:true
    },
]

