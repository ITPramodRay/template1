import { lazy } from "react";
import { myProfilePaths } from "../../utils/RoutingConstants";
import SideBarMobile from "./sideBar/sideBarMobile";
const myAccountPage = lazy(() => import("./index"));

export const myAccountPageRouters = [
  {
    path: myProfilePaths.myProfile,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myProfilePaths.kycDetails,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myProfilePaths.bankDetails,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myProfilePaths.contactDetails,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myProfilePaths.nominee,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myProfilePaths.referFriend,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myProfilePaths.preApprovedInsurance,
    component: myAccountPage,
    exact: true,
  },
  {
    path: myProfilePaths.sidebarMobile,
    component: SideBarMobile,
    exact: true,
  },
];
