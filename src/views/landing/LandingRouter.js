import React, { lazy } from "react";

const LandingPage = lazy(() => import("./LandingPage/Landing"));

export const loadingPageRouters = [
    {
        "path":"/landingPage",
        "component":LandingPage,
        "exact":true
    }
]

