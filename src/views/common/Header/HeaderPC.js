import React from "react";
import logohead from "../../../assets/images/head-logo.svg";
import searchicon from "../../../assets/images/Search-icon.svg";
import notification from "../../../assets/images/notification.svg";
import downicon from "../../../assets/images/Arrow.svg";
import { Link } from "react-router-dom";
import {dashboardPaths} from "../../../utils/RoutingConstants"
const HeaderPC = ({activepath}) => {
  return (
    <>
      <header className="Dashbord-header-PC">
        <div className="left-head">
          <img alt="" src={logohead}></img>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              className="search-tab"
            ></input>
            <img alt="" className="search-icon" src={searchicon}></img>
          </div>
        </div>
        <div className="nav-bar">
          <ul>
            <li>
              <Link className={activepath===dashboardPaths.dashboard?"active_link":""}>Dashboard</Link>
            </li>
            <li>
              <Link className={activepath===dashboardPaths.invest?"active_link":""}>Invest</Link>
            </li>
            <li>
              <Link className={activepath===dashboardPaths.plan?"active_link":""}>Plan</Link>
            </li>
            <li>
              <Link className={activepath===dashboardPaths.advisory?"active_link":""}>Advisory</Link>
            </li>
            <li>
              <Link className={activepath===dashboardPaths.learn?"active_link":""}>Learn</Link>
            </li>
            <li>
              <Link className={activepath===dashboardPaths.wellbeing?"active_link":""}>
                Wellbeing
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-head">
          <img alt="" src={notification}></img>
          <img alt="" src="https://picsum.photos/200" className="profile-pic"></img>
          <img alt="" src={downicon}></img>
        </div>
      </header>
    </>
  );
};

export default HeaderPC;
