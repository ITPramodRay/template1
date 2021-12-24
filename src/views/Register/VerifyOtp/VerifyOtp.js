import React from "react";
import { Container, Row, Col, Form, Input } from "reactstrap";

import Life99Logo from "../../../assets/images/Life99Logo.svg";
import OtpInput from "react-otp-input";
import Timer from "../../common/timer";
const VerifyOtp = ({ verifyOtp, setOtp, otp, err }) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="Logo">
              <img src={Life99Logo} alt="Life99" title="Life99" />
              <h6 style={{ color: "red" }}>{err}</h6>
            </div>
          </Col>
          <Col md={12}>
            <div className="signuptitle">
              <span>Enter OTP</span>
              <p>OTP has been sent to the mobile number entered by you</p>
            </div>
          </Col>
        </Row>
        <div>
          <Row>
            <OtpInput
              className="otpInput"
              value={otp}
              onChange={setOtp}
              numInputs={4}
            />
          </Row>
          <Row className="resentotp">
            <div className="col-md-9 col-9" >
              <a href="#">Resent OTP</a>
            </div>
            <div className="mr-right col-md-3 col-3">
              
                <p><Timer/></p>

              
            </div>
          </Row>
          <Row>
            <Col md={12}>
              <input
                className="subbtn"
                type="submit"
                name="Submit"
                onClick={verifyOtp}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default VerifyOtp;
