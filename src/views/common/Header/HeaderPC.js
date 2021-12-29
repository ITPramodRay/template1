import React, { useState } from "react";
import logohead from "../../../assets/images/head-logo.svg";
import searchicon from "../../../assets/images/Search-icon.svg";
import notification from "../../../assets/images/notification.svg";
import downicon from "../../../assets/images/Arrow.svg";
import logo from "../../../assets/images/Life99Logo.svg";
import Following from "../../../assets/images/Following-bro 1.svg";
import icon from "../../../assets/images/menu-icon.svg";
import { Link } from "react-router-dom";
import { dashboardPaths } from "../../../utils/RoutingConstants";
import { useHistory } from "react-router-dom";
import { myProfilePaths } from "../../../utils/RoutingConstants";
import { emptyNavPaths } from "../../../utils/RoutingConstants";

const HeaderPC = ({ activepath,empty }) => {
  const history = useHistory();
  const [openProfileSidebar, setOpenProfileSidebar] = useState(false);

  return (
    <>
      <div className="header_color">
        <div className="container">
          <div className="col-md-12">
            <header className="Dashbord-header-PC">
              <div className="left-head">
                <img alt="" src={logohead}></img>
                {!empty && <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-tab"
                  ></input>
                  <img alt="" className="search-icon" src={searchicon}></img>
                </div>}
              </div>
              {!empty && <div className="nav-bar">
                <ul className="m-0 p-0">
                  <li>
                    <Link
                      to={dashboardPaths.dashboard}
                      className={
                        activepath === dashboardPaths.dashboard
                          ? "active_link"
                          : ""
                      }
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={dashboardPaths.invest}
                      className={
                        activepath === dashboardPaths.invest
                          ? "active_link"
                          : ""
                      }
                    >
                      Invest
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={dashboardPaths.plan}
                      className={
                        activepath === dashboardPaths.plan ? "active_link" : ""
                      }
                    >
                      Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={dashboardPaths.advisory}
                      className={
                        activepath === dashboardPaths.advisory
                          ? "active_link"
                          : ""
                      }
                    >
                      Advisory
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={dashboardPaths.learn}
                      className={
                        activepath === dashboardPaths.learn ? "active_link" : ""
                      }
                    >
                      Learn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={dashboardPaths.wellbeing}
                      className={
                        activepath === dashboardPaths.wellbeing
                          ? "active_link"
                          : ""
                      }
                    >
                      Wellbeing
                    </Link>
                  </li>
                </ul>
              </div>}
              {!empty && <div
                className="right-head"
                onClick={() => setOpenProfileSidebar((prevState) => !prevState)}
              >
                <img alt="" src={notification}></img>
                <img
                  alt=""
                  src="https://picsum.photos/200"
                  className="profile-pic"
                ></img>
                <img alt="" src={downicon}></img>
              </div>}
            </header>
          </div>
        </div>
      </div>

      <div
        className={`profile_menu ${
          openProfileSidebar ? "profile_menu_open" : "profile_menu_off"
        }`}
      >
        <div className="head_base">
          <img alt="" src={Following}></img>
          <div className="right_div">
            <h2>Refer a friend</h2>
            <p>Referral earnings on each succesful invite.</p>
            <p className="life_99_btn">Code:Life99</p>
          </div>
        </div>
        <div className="data_base">
          <div className="left_side">
            <div
              className="menu_items"
              onClick={() => history.push(dashboardPaths.dashboard)}
            >
              <h2>Home</h2>
              <img alt="" src={icon}></img>
            </div>
            <div
              className="menu_items"
              onClick={() => history.push(myProfilePaths.myProfile)}
            >
              <h2>My Profile </h2>
              <img alt="" src={icon}></img>
            </div>
            <div className="menu_items">
              <h2>My Investment profile</h2>
              <img alt="" src={icon}></img>
            </div>
            <div className="menu_items">
              <h2>Portfolio</h2>
              <img alt="" src={icon}></img>
            </div>
            <div
              className="menu_items"
              onClick={() => history.push(emptyNavPaths.serviceCorner)}
            >
              <h2>Service Corner</h2>
              <img alt="" src={icon}></img>
            </div>
            <div
              className="menu_items"
              onClick={() => history.push(dashboardPaths.invest)}
            >
              <h2>Invest</h2>
              <img alt="" src={icon}></img>
            </div>
            <div
              className="menu_items"
              onClick={() => history.push(dashboardPaths.plan)}
            >
              <h2>Plan</h2>
              <img alt="" src={icon}></img>
            </div>
            <div
              className="menu_items"
              onClick={() => history.push(dashboardPaths.learn)}
            >
              <h2>Learn</h2>
              <img alt="" src={icon}></img>
            </div>
            <div className="menu_items">
              <h2>Advisory</h2>
              <img alt="" src={icon}></img>
            </div>
          </div>

          <div className="right_side">
            <div
              className="menu_items"
              onClick={() => history.push(emptyNavPaths.calculator)}
            >
              <h2>Calculators </h2>
              <img alt="" src={icon}></img>
            </div>
            <div className="menu_items">
              <h2>Webinars </h2>
              <img alt="" src={icon}></img>
            </div>
            <div className="menu_items">
              <h2>Support</h2>
              <img alt="" src={icon}></img>
            </div>
            <div className="menu_items">
              <h2>Legal information</h2>
              <img alt="" src={icon}></img>
            </div>
            <div className="menu_items">
              <h2>Logout</h2>
              <img alt="" src={icon}></img>
            </div>
            <div
              className="menu_items"
              onClick={() => history.push(dashboardPaths.wellbeing)}
            >
              <h2>Wellbeing</h2>
              <img alt="" src={icon}></img>
            </div>
            <div className="link">
              <img alt="" src={logo}></img>
              <a href="#">www.life99.in | by HDFC Pension</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPC;
