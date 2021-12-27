import React,{useState} from 'react';
import AppHeader from "../common/Header/Header"
import WellBeing from './WellBeing/WellBeing';
import Invest from './Invest/Invest';
import { useLocation } from 'react-router-dom';
import {dashboardPaths} from "../../utils/RoutingConstants"
import Plan from '../Plan/Plan';
// import "swiper/css/bundle";

const  DashBoardPage = () => {
  const location = useLocation()
  return (
    <>
    <AppHeader/>
   { location.pathname === dashboardPaths.wellbeing && <WellBeing />}
   { location.pathname === dashboardPaths.invest && <Invest />}
   { location.pathname === dashboardPaths.plan && <Plan />}
    </>
  );
}
export default DashBoardPage;
