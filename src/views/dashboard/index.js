import React,{useState} from 'react';
import AppHeader from "../common/Header/Header"
import WellBeing from './WellBeing/WellBeing';
import Invest from './Invest/Invest';
import Dashbordpage from './MainDashboard/index'
import Nps from "./NPS/nps"
import Annuity from "./Annuity/annuity"
import { useLocation } from 'react-router-dom';
import {dashboardPaths} from "../../utils/RoutingConstants"
import Plan from '../Plan/Plan';
import api from "../../utils/axios"
import { local } from '../../utils/Utils';
// import "swiper/css/bundle";

const  DashBoardPage = () => {
  const location = useLocation()
  const baseUrl = "https://api-uat.life99.in/"
  const loginToken = local.getItem("loginToken")
  console.log(loginToken,"login token")
  api(baseUrl,loginToken).get("/api-mdm/individual/profile",{ header:{
    "Authorization": loginToken && `Bearer ${loginToken}` 
  }})
  console.log(dashboardPaths.myprofile,"this")
  return (
   <>
   <AppHeader/>
    { location.pathname === dashboardPaths.dashboard && <Dashbordpage />}
    { location.pathname === dashboardPaths.wellbeing && <WellBeing />}
    { location.pathname === dashboardPaths.invest && <Invest />}
    { location.pathname === dashboardPaths.plan && <Plan />}
    { location.pathname === dashboardPaths.nps && <Nps />}
    { location.pathname === dashboardPaths.annuity && <Annuity />}
   </>
  );
}
export default DashBoardPage;
