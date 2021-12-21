import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";

import Signupfrm from "./Signup/Signup";
import VerifyOtp from "./VerifyOtp/VerifyOtp";
import SetPassword from "./SetPassword/SetPassword";
import Loading from "./Loading";
import Otprightimg from "../../assets/images/Otpright.svg";

const SignUp = () => {
  return (
    <Fragment>
      {/* <Loading /> */}
      <section className="signupmain">
        <div className="signleft">
          <Signupfrm />
          {/* <VerifyOtp /> */}
          {/* <SetPassword /> */}
        </div>
        <div className="signright">
          <h3>
            Be smart with your money. Start <a href="#">planning</a> today.
          </h3>
          <img className="img-fluid" src={Otprightimg} alt="" title="" />
        </div>
      </section>
    </Fragment>
  );
};

export default SignUp;
