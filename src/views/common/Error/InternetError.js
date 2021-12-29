import React from "react";

import logo from "../../../assets/images/W_head-logo.svg";
import NoInternetConnection from "../../../assets/images/NoInternetConnection.svg";
import Clouds from "../../../assets/images/Clouds.svg";
import "./error.scss";

const InternetError = () => {
  return (
    <>
      <div className="base_div">
        <div className="container">
          <img src={logo} className="logo"></img>
        </div>
        <div className="container internetdata data">
          <div>
            <img
              src={NoInternetConnection}
              className="NoInternetConnectionimg"
            ></img>
            <h2>No Internet Connection</h2>
            <p>
              Your not connected to the internet.<br></br>
              Make sure Wi-Fi is on,
            </p>
            <button className="BOback_btn">Try Again</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternetError;
