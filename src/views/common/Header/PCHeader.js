import React from "react";
import logohead from "../../../assets/images/head-logo.svg";
import searchicon from "../../../assets/images/Search-icon.svg";
import notification from "../../../assets/images/notification.svg";
import downicon from "../../../assets/images/Arrow.svg";

const PCHeader = () => {
  return (
    <>
      <header className="Dashbord-header-PC">
        <div className="left-head">
          <img src={logohead}></img>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              className="search-tab"
            ></input>
            <img className="search-icon" src={searchicon}></img>
          </div>
        </div>
        <div className="nav-bar">
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Invest</a>
            </li>
            <li>
              <a href="#">Plan</a>
            </li>
            <li>
              <a href="#">Advisory</a>
            </li>
            <li>
              <a href="#">Learn</a>
            </li>
            <li>
              <a href="#" className="active_link">
                Wellbeing
              </a>
            </li>
          </ul>
        </div>
        <div className="right-head">
          <img src={notification}></img>
          <img src="https://picsum.photos/200" className="profile-pic"></img>
          <img src={downicon}></img>
        </div>
      </header>
    </>
  );
};

export default PCHeader;
