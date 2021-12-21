import React, { useState } from "react";

import Signupfrm from "./Signup/Signup";
import VerifyOtp from "./VerifyOtp/VerifyOtp";
import SetPassword from "./SetPassword/SetPassword";
import Loading from "./Loading";
import Otprightimg from "../../assets/images/Otpright.svg";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [viewComponent, setViewComponent] = useState("signupForm");
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    mobEmail: "",
    age: "",
    income: "",
  });
  const [otp, setOtp] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    console.log(e.target);
    setViewComponent("verifyOtp");
  };

  const verifyOtp = () => {
    alert(otp);
    setViewComponent("setPassword");
  };

  const setPassword = (password, confirmPassword) => {
    alert(password + " " + confirmPassword);
    setViewComponent("loading");
  };

  return (
    <>
      {viewComponent === "loading" && <Loading />}
      {viewComponent !== "loading" && (
        <section className="signupmain">
          <div className="signleft">
            {viewComponent === "signupForm" && (
              <Signupfrm
                registerUser={registerUser}
                registerForm={registerForm}
                setRegisterForm={setRegisterForm}
              />
            )}
            {viewComponent === "verifyOtp" && (
              <VerifyOtp verifyOtp={verifyOtp} otp={otp} setOtp={setOtp} />
            )}
            {viewComponent === "setPassword" && (
              <SetPassword setPassword={setPassword} />
            )}
          </div>
          <div className="signright">
            <h3>
              Be smart with your money. Start <Link>planning</Link> today.
            </h3>
            <img className="img-fluid" src={Otprightimg} alt="" title="" />
          </div>
        </section>
      )}
    </>
  );
};

export default SignUp;
