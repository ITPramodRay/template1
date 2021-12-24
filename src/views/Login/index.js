import React, { useState, useEffect } from "react";
import Otprightimg from "../../assets/images/Otpright.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import api from "../../utils/axios";
import LoginPage from "./LoginPage/Login";
import VerifyLoginOtp from "./VerifyOtp/VerifyOtp";
import { encryptPassword } from "../../utils/Utils";
import { dashboardPaths } from "../../utils/RoutingConstants";
import LoginValidation from "./LoginValidation";

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
  const [validationError, setValidationError] = useState({});
  const history = useHistory();
  let baseUrl = "https://api-uat.life99.in/";

  const handleLoginValues = (field, value) => {
    let tempLoginUserData = { ...loginUserData };
    tempLoginUserData[field] = value;
    setLoginUserData(tempLoginUserData);
    handleValidation();
  };

  const handleValidation = () => {
    let LoginValidationError = LoginValidation(loginUserData, viewCompoment);
    setValidationError(LoginValidationError);
    return LoginValidationError;
  };

  const handleSentOtp = async () => {
    let userEmail = { emailId: loginUserData.email };
    await api(baseUrl).post("api-mdm/auth/send-login-otp", userEmail);
  };

  const handleOtpLogin = async () => {
    setLoginUserData({ ...loginUserData, otpBased: !loginUserData.otpBased });
    !loginUserData.otpBased && handleSentOtp();
  };

  const handleLoginUser = async () => {
    if (Object.keys(handleValidation()).length === 0) {
      loginUserData["password"] = encryptPassword(loginUserData["password"]);
      await api(baseUrl)
        .post("api-mdm/auth/login", loginUserData)
        .then((res) => {
          history.push('/dashboard');
        })
        .catch((res) =>
          setErrorToast(Object.values(res)["2"]["data"]["message"])
        );
    }
  }; 

  const handleForgetPassword = async (pageView) => {
    if (loginUserData.email === "") {
      setValidationError({ ...validationError, email: "Please fill email" });
    } else {
      setViewComponent(pageView);
      handleSentOtp();
    }
  };

  const handleForgetPasswordOtp = async () => {
    if (loginUserData.otp !== "") {
      let forgetOtpVerfiyObj = {
        email: loginUserData.email,
        otp: loginUserData.otp,
      };
      await api(baseUrl).post(
        "api-mdm/auth/forgot-password",
        forgetOtpVerfiyObj
      );
    }
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
              errorToast={errorToast}
              validationError={validationError}
            />
          )}
          {viewCompoment === "ForgetPassword" && (
            <VerifyLoginOtp
              handleLoginValues={handleLoginValues}
              handleForgetPasswordOtp={handleForgetPasswordOtp}
            />
          )}
        </div>
        <div className="signright">
          <h3>
            Be smart with your money. Start <Link to="">planning</Link> today.
          </h3>
          <img className="img-fluid" src={Otprightimg} alt="" title="" />
        </div>
      </section>
    </>
  );
};

export default Login;
