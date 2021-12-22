import React, { useState, useEffect } from "react";
import Otprightimg from "../../assets/images/Otpright.svg";
import { Link } from "react-router-dom";

import api from "../../utils/axios";
import LoginPage from "./LoginPage/Login";
import VerifyLoginOtp from "./VerifyOtp/VerifyOtp";

const Login = () => {
  const [viewCompoment, setViewComponent] = useState("LoginPage");
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    login_type: "employee",
    otpBased: false,
    password: "",
    otp: "",
  });

  //   {
  //     "email": "abc@gmail.com",
  //     "login_type": "employee",
  //     "otpBased": true,
  //     "password":""
  //     "otp": "5210"
  // }

  const [optLogin, setOtpLogin] = useState(false);

  const handleLoginValues = (field, value) => {
    let tempLoginUserData = { ...loginUserData };
    tempLoginUserData[field] = value;
    setLoginUserData(tempLoginUserData);
  };

  const handleOtpLogin = () => {
    setOtpLogin(!optLogin);
  };

  const handleSubmit = (pageView) => {
    setViewComponent(pageView);
  };

  return (
    <>
      <section className="signupmain">
        <div className="signleft">
          {viewCompoment === "LoginPage" && (
            <LoginPage
              optLogin={optLogin}
              handleOtpLogin={handleOtpLogin}
              handleLoginValues={handleLoginValues}
              handleSubmit={handleSubmit}
            />
          )}
          {viewCompoment === "OptLoginView" && <VerifyLoginOtp />}
        </div>
        <div className="signright">
          <h3>
            Be smart with your money. Start <Link>planning</Link> today.
          </h3>
          <img className="img-fluid" src={Otprightimg} alt="" title="" />
        </div>
      </section>
    </>
  );
};

export default Login;
