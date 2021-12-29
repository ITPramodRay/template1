import React, { useState,useEffect } from "react";
import AppHeader from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import WellBeing from "./WellBeing/WellBeing";
import Invest from "./Invest/Invest";
import Dashbordpage from "./MainDashboard/index";
import Nps from "./NPS/nps";
import Annuity from "./Annuity/annuity";
import { useLocation } from "react-router-dom";
import { dashboardPaths } from "../../utils/RoutingConstants";
import Plan from "../Plan/Plan";
import api from "../../utils/axios";
import { local } from "../../utils/Utils";
// import "swiper/css/bundle";

const DashBoardPage = () => {
  const location = useLocation();
  const baseUrl = "https://api-uat.life99.in/";
  const loginToken = local.getItem("loginToken");
  const [recallApi,setRecallApi] = useState(false)
  const [userProfileData, setUserProfileData] = useState(null);
  console.log(loginToken, "login token");
  useEffect(()=>{
    api(baseUrl, loginToken)
    .get("/api-mdm/individual/profile", {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
    })
    .then((res) => {
      console.log(res);
      setUserProfileData(res.data?.data)
    })
    .catch((err) => console.log(err));
  },[recallApi])
  
  console.log(dashboardPaths.myprofile, "this");
  return (
    <>
      <AppHeader />
      {location.pathname === dashboardPaths.dashboard && <Dashbordpage userProfileData={userProfileData} />}
      {location.pathname === dashboardPaths.wellbeing && <WellBeing />}
      {location.pathname === dashboardPaths.invest && <Invest />}
      {location.pathname === dashboardPaths.plan && <Plan />}
      {location.pathname === dashboardPaths.nps && <Nps />}
      {location.pathname === dashboardPaths.annuity && <Annuity />}
      <Footer />
    </>
  );
};
export default DashBoardPage;
