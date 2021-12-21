import React, { lazy } from "react";
import {landingPagePaths} from "../../utils/RoutingConstants"
const LandingPage = lazy(() => import("./index"));
const Home = lazy(() => import("./components/index"));

export const loadingPageRouters = [
    {
        path: landingPagePaths.landingPage,
        component:LandingPage,
        exact:true
    },
]

