import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Wlogohead from "../../../assets/images/W_head-logo.svg";
import Wdownicon from "../../../assets/images/W_Arrow.svg";
import Wnotification from "../../../assets/images/W_notification.svg";
import { dashboardPaths } from "../../../utils/RoutingConstants";
import { Link } from "react-router-dom";

// Images & Icons
import ReferIllustration from "../../../assets/images/Following-bro 1.svg";

const HeaderMV = ({ activepath }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className="Dashbord-header-MB">
        <div className="top-mb-head">
          <div className="profile">
            <button
              className="text-btn d-flex gap-2 align-items-center"
              onClick={handleClick}
            >
              <img
                alt=""
                src="https://picsum.photos/200"
                className="profile-pic"
              ></img>
              <img alt="" src={Wdownicon}></img>
            </button>
            {/* Dropdown menu  */}
            <Menu
              className="header-nav-mobile"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem className="refer-dropdown-item" onClick={handleClose}>
                <div className="menu-refer-card d-flex justify-content-between align-items-center">
                  <img
                    className="illustration"
                    src={ReferIllustration}
                    alt=""
                  />
                  <div className="content d-flex flex-column gap-2">
                    <h3>Refer a friend</h3>
                    <p>Referral earnings on each succesful invite.</p>
                  </div>
                </div>
              </MenuItem>
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
              <MenuItem onClick={handleClose}>My Investment Profile</MenuItem>
              <MenuItem onClick={handleClose}>My Holdings</MenuItem>
              <MenuItem onClick={handleClose}>Service Corner</MenuItem>
              <MenuItem onClick={handleClose}>Invest</MenuItem>
              <MenuItem onClick={handleClose}>Plan</MenuItem>
              <MenuItem onClick={handleClose}>Learn</MenuItem>
              <MenuItem onClick={handleClose}>Wellbeing</MenuItem>
              <MenuItem onClick={handleClose}>Calculators</MenuItem>
              <MenuItem onClick={handleClose}>Webinars</MenuItem>
              <MenuItem onClick={handleClose}>Support</MenuItem>
              <MenuItem onClick={handleClose}>Legal Information</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <img alt="" src={Wlogohead}></img>
          <img alt="" src={Wnotification}></img>
        </div>
        <div className="down-mb-head">
          <ul>
            <li>
              <Link
                to={dashboardPaths.dashboard}
                className={
                  activepath === dashboardPaths.dashboard ? "active_link" : ""
                }
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to={dashboardPaths.invest}
                className={
                  activepath === dashboardPaths.invest ? "active_link" : ""
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
                  activepath === dashboardPaths.advisory ? "active_link" : ""
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
                  activepath === dashboardPaths.wellbeing ? "active_link" : ""
                }
              >
                Wellbeing
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default HeaderMV;
