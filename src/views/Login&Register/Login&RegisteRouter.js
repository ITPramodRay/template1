import { lazy } from "react";
import {LoginAndRegisterPagePaths} from "../../utils/RoutingConstants"
const SignupPage = lazy(() => import("./index"));


export const loginAndRegisterPageRouters = [
    {
        path: LoginAndRegisterPagePaths.RegisterPage,
        component:SignupPage,
        exact:true
    },
]