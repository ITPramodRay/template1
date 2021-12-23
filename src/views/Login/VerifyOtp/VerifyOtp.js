import React, { useState } from "react";
import { Button } from "@mui/material";
import { Col, Container, Form, Row, Input } from "reactstrap";

import Life99Logo from "../../../assets/images/Life99Logo.svg";

const VerifyLoginOtp = ({ handleLoginValues, handleForgetPasswordOtp }) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="Logo">
              <img src={Life99Logo} alt="Life99" title="Life99" />
              <h2>Demo Text</h2>
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
          <Input
            type="text"
            name="otp"
            onChange={(e) => handleLoginValues("otp", e.target.value)}
          />
        </Row>
        <Row className="resentotp">
          <Col md={4}>
            <a href="#">Resent OTP</a>
          </Col>
          <Col md={6} className="mr-right">
            <p>09:59</p>
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
