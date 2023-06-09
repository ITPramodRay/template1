import { lazy } from "react";
import { myProfilePaths } from "../../utils/RoutingConstants";
import SideBarMobile from "./sideBar/sideBarMobile";
const myAccountPage = lazy(() => import("./index"));
const routes = [
  myProfilePaths.myProfile,
  myProfilePaths.kycDetails,
  myProfilePaths.bankDetails,
  myProfilePaths.contactDetails,
  myProfilePaths.nominee,
  myProfilePaths.referFriend,
  myProfilePaths.preApprovedInsurance,
  myProfilePaths.corporateDetailsMV1,
  myProfilePaths.corporateDetailsMV2,
  myProfilePaths.corporateDetailsMV3,
  myProfilePaths.sidebarMobile,
];
export const myAccountPageRouters = routes.map((ele) => ({
  path: ele,
  component: myAccountPage,
  exact: true,
}));
