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
  const [otpValue, setOtpValue] = useState("");
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
          history.push("/dashboard/wellBeing");
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
      window.history.replaceState(null, "", `/?ForgetPassword`);
    }
  };

  const handleVerifyOtpToken = async (otpToken) => {
    let otpTokenVerifier = { forgotPasswordToken: otpToken };
    await api(baseUrl)
      .post("api-mdm/auth/verify-forgot-password-token", otpTokenVerifier)
      .then((res) => res.data.statusCode === 200 && console.log(res.data))
      .catch((res) =>
        setErrorToast(Object.values(res)["2"]["data"]["message"])
      );
  };

  const handleForgetPasswordOtp = async () => {
    if (otpValue !== "") {
      let forgetOtpVerfiyObj = {
        email: loginUserData.email,
        otp: otpValue,
      };
      await api(baseUrl)
        .post("api-mdm/auth/forgot-password", forgetOtpVerfiyObj)
        .then((res) => {
          res.data.statusCode === 200 && handleVerifyOtpToken(res.data.data);
        })
        .catch((res) =>
          setErrorToast(Object.values(res)["2"]["data"]["message"])
        );
    }
  };

  return (
    <>
      <section className="signupmain">
        <div className="signleft">
          {viewCompoment === "LoginPage" && (
            <LoginPage
              loginUserData={loginUserData}
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
              handleForgetPasswordOtp={handleForgetPasswordOtp}
              otpValue={otpValue}
              setOtpValue={setOtpValue}
              handleSentOtp={handleSentOtp}
              errorToast={errorToast}
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
