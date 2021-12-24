import React, { useState, lazy, useEffect } from "react";
import Otprightimg from "../../assets/images/Otpright.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import api from "../../utils/axios";

import { encryptPassword } from "../../utils/Utils";
import {
  dashboardPaths,
  LoginAndRegisterPagePaths,
} from "../../utils/RoutingConstants";
import LoginValidation from "./LoginValidation";
import { local } from "../../utils/Utils";

const LoginPage = lazy(() => import("./LoginPage/Login"));
const VerifyLoginOtp = lazy(() => import("./VerifyOtp/VerifyOtp"));

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
  const [passwordType, setPasswordType] = useState("password");
  const [timer, setTimer] = useState({ minutes: 10, seconds: 0 });
  const history = useHistory();
  let baseUrl = "https://api-uat.life99.in/";

  // set value for login
  const handleLoginValues = (field, value) => {
    let tempLoginUserData = { ...loginUserData };
    tempLoginUserData[field] = value;
    setLoginUserData(tempLoginUserData);
    handleValidation();
  };

  // login page validation
  const handleValidation = () => {
    let LoginValidationError = LoginValidation(loginUserData, viewCompoment);
    setValidationError(LoginValidationError);
    return LoginValidationError;
  };

  // turn on and off opt switch as per Api response
  const handleOtpSwitchOffOn = (message, type) => {
    setLoginUserData({ ...loginUserData, otpBased: type });
    setErrorToast(message);
    setInterval(timerCountDown, 1000);
  };

  // send request for login otp and forget password otp
  const handleSentOtp = async () => {
    let userEmail = { emailId: loginUserData.email };
    await api(baseUrl)
      .post("api-mdm/auth/send-login-otp", userEmail)
      .then((res) =>
        res.data.statusCode !== "404" && res.data.status == "Failure"
          ? handleOtpSwitchOffOn(res.data.message, false)
          : handleOtpSwitchOffOn("", true)
      )
      .catch((res) =>
        handleOtpSwitchOffOn(Object.values(res)["2"]["data"]["message"], false)
      );
  };

  // works on switch for login with otp
  const handleOtpLogin = async () => {
    if (handleValidation()["email"] == undefined) {
      !loginUserData.otpBased && handleSentOtp();
    }
    if (loginUserData.otpBased) {
      setLoginUserData({ ...loginUserData, otpBased: false });
    }
  };

  const onLoginSuccess = (res) => {
    let token = res.data.data.token;
    let individualInfo = JSON.stringify(res.data.data.individualInfo);
    local.setItem("loginToken", token);
    local.setItem("individualInfo", individualInfo);
    history.push("/dashboard");
  };

  // login
  const handleLoginUser = async () => {
    if (Object.keys(handleValidation()).length === 0) {
      loginUserData["password"] = encryptPassword(loginUserData["password"]);
      await api(baseUrl)
        .post("api-mdm/auth/login", loginUserData)
        .then((res) => {
          onLoginSuccess(res);
        })
        .catch((res) => onLoginError(res));
    }
  };

  const onLoginError = (res) => {
    setLoginUserData({ ...loginUserData, password: "" });
    setErrorToast(Object.values(res)["2"]["data"]["message"]);
  };

  // prompt user to fill passoword when clicked on forget password with emial
  const handleForgetPassword = async (pageView) => {
    if (loginUserData.email === "") {
      setValidationError({ ...validationError, email: "Please fill email" });
    } else {
      setViewComponent(pageView);
      handleSentOtp();
      window.history.replaceState(null, "", `/?ForgetPassword`);
    }
  };

  // check jwd token and redirect user to login page
  const handleVerifyOtpToken = async (otpToken) => {
    let otpTokenVerifier = { forgotPasswordToken: otpToken };
    await api(baseUrl)
      .post("api-mdm/auth/verify-forgot-password-token", otpTokenVerifier)
      .then((res) => {
        res.data.status === "Valid Token" &&
          history.push({
            pathname: LoginAndRegisterPagePaths["UpdatePassword"],
            state: { token: res.data.token },
          });
      })
      .catch((res) => onLoginError(res));
  };

  // sends otp when click on forget password
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
        .catch((res) => onLoginError(res));
    }
  };

  // show and hides passoword
  const handlePasswordShowHide = (type) => {
    type == "show" ? setPasswordType("text") : setPasswordType("password");
  };

  const timerCountDown = () => {
    let tempTimer = { ...timer };
    if (tempTimer.seconds > 0) {
      tempTimer.seconds = tempTimer.seconds - 1;
    }
    if (tempTimer.seconds === 0) {
      if (tempTimer.minutes === 0) {
        clearInterval(timerCountDown);
        tempTimer.minutes = 10;
        tempTimer.seconds = 0;
      } else {
        clearInterval(timerCountDown);
        tempTimer.minutes = tempTimer.minutes - 1;
        tempTimer.seconds = 59;
      }
    }
    setTimer(tempTimer);
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
              passwordType={passwordType}
              handlePasswordShowHide={handlePasswordShowHide}
              timer={timer}
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
