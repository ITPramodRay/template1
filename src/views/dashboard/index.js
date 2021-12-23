import React from 'react';
import AppHeader from "../common/Header/Header"
import WellBeing from './WellBeing/WellBeing';
import Invest from './Invest/Invest';
import { useLocation } from 'react-router-dom';
import {dashboardPaths} from "../../utils/RoutingConstants"
// import "swiper/css/bundle";

const  DashBoardPage = () => {
  const location = useLocation()
  return (
    <>
    <AppHeader />
   { location.pathname === dashboardPaths.wellbeing && <WellBeing />}
   { location.pathname === dashboardPaths.invest && <Invest />}
    </>
  );
}
export default DashBoardPage;
