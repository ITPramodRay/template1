import React from "react";
import Calculators from "./calculator/Calculators";
import Offerdetail from "./offerDetails/Offerdetail";
import Servicecorner from "../dashboard/MainDashboard/ServiceCorner";
import Verifyaccount from "./verifyAccount/Verifyaccount";
import Community from "./community/community"
import SupportPage from "./supportPage/supportPage";
import LegalInfo from "./legalInfo/legalInfo"
import Webinars from "./webinars/webinars";
import Article from "./article/article";
import Footer from "../common/Footer/Footer";
import AppHeader from "../common/Header/Header";
import { emptyNavPaths } from "../../utils/RoutingConstants";
import { useLocation } from "react-router-dom";
function EmptyNav() {
  const location = useLocation();
  console.log(location.pathname,"this is")
  return (
    <>
    <AppHeader empty={true}/>
      {location.pathname === emptyNavPaths.verifyAccount && <Verifyaccount />}
      {location.pathname === emptyNavPaths.serviceCorner && <Servicecorner />}
      {location.pathname === emptyNavPaths.calculator && <Calculators />}
      {location.pathname === emptyNavPaths.offerDetails && <Offerdetail />}
      {location.pathname === emptyNavPaths.community && <Community />}
      {location.pathname === emptyNavPaths.legalInfo && <LegalInfo />}
      {location.pathname === emptyNavPaths.support && <SupportPage />}
      {location.pathname === emptyNavPaths.webinars && <Webinars />}
      {location.pathname === emptyNavPaths.article && <Article />}
      <Footer />
    </>
  );
}

export default EmptyNav;
