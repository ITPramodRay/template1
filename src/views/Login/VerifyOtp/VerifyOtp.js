import React, { useState } from "react";
import { Button } from "@mui/material";
import { Col, Container, Form, Row, Input } from "reactstrap";
import OtpInput from "react-otp-input";
import { Link } from "@mui/material";

import Timer from "../../common/timer";
import Life99Logo from "../../../assets/images/Life99Logo.svg";

const VerifyLoginOtp = ({
  handleForgetPasswordOtp,
  setOtpValue,
  otpValue,
  handleSentOtp,
  errorToast,
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="Logo">
              <img src={Life99Logo} alt="Life99" title="Life99" />
              <h2>{errorToast}</h2>
            </div>
          </Col>
          <Col md={12}>
            <div className="signuptitle">
              <span>Enter OTP</span>
              <p>OTP has been sent to the mobile number entered by you</p>
            </div>
          </Col>
        </Row>
        <Row>
          <OtpInput
            className="otpInput"
            value={otpValue}
            numInputs={4}
            onChange={setOtpValue}
          />
        </Row>
        <Row className="resentotp">
          <Col md={4}>
            <Link onClick={() => handleSentOtp()}>Resent OTP</Link>
          </Col>
          <Col md={6}>
            <Timer />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button
              className="subbtn"
              onClick={() => handleForgetPasswordOtp()}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VerifyLoginOtp;
