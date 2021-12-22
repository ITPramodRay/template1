import React, { useState, useEffect } from "react";
import Otprightimg from "../../assets/images/Otpright.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import api from "../../utils/axios";
import LoginPage from "./LoginPage/Login";
import VerifyLoginOtp from "./VerifyOtp/VerifyOtp";
import { encryptPassword } from "../../utils/Utils";
import { dashboardPaths } from "../../utils/RoutingConstants";

const Login = () => {
  const [viewCompoment, setViewComponent] = useState("LoginPage");
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    login_type: "employee",
    otpBased: false,
    password: "",
    otp: "",
  });
  const [errorToast, setErrorToast] = useState("");
  const history = useHistory();

  const handleLoginValues = (field, value) => {
    let tempLoginUserData = { ...loginUserData };
    tempLoginUserData[field] = value;
    setLoginUserData(tempLoginUserData);
  };

  const handleOtpLogin = () => {
    setLoginUserData({ ...loginUserData, otpBased: !loginUserData.otpBased });
  };

  const handleLoginUser = async () => {
    let baseUrl = "https://api-uat.life99.in/";
    let redirectDashBoard = history.push(dashboardPaths["dashboard"]);
    loginUserData["password"] = encryptPassword(loginUserData["password"]);
    await api(baseUrl)
      .post("api-mdm/auth/login", loginUserData)
      .then(redirectDashBoard)
      .catch(console.log((res) => console.log(res)));
  };

  const handleForgetPassword = (pageView) => {
    setViewComponent(pageView);
  };

  return (
    <>
      <section className="signupmain">
        <div className="signleft">
          {viewCompoment === "LoginPage" && (
            <LoginPage
              optLogin={loginUserData.otpBased}
              handleOtpLogin={handleOtpLogin}
              handleLoginValues={handleLoginValues}
              handleForgetPassword={handleForgetPassword}
              handleLoginUser={handleLoginUser}
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
