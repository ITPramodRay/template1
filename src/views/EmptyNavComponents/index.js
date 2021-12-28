import React from "react";
import Calculators from "./calculator/Calculators";
import Offerdetail from "./offerDetails/Offerdetail";
import Servicecorner from "../dashboard/MainDashboard/ServiceCorner";
import Verifyaccount from "./verifyAccount/Verifyaccount";
import { emptyNavPaths } from "../../utils/RoutingConstants";
import { useLocation } from "react-router-dom";
function EmptyNav() {
  const location = useLocation();
  return (
    <>
      {location.pathname === emptyNavPaths.verifyAccount && <Verifyaccount />}
      {location.pathname === emptyNavPaths.serviceCorner && <Servicecorner />}
      {location.pathname === emptyNavPaths.calculator && <Calculators />}
      {location.pathname === emptyNavPaths.offerDetails && <Offerdetail />}{" "}
    </>
  );
}

export default EmptyNav;
