import React from "react";
import { Col, Container, Input, Label, Row } from "reactstrap";
import { Switch, Button } from "@mui/material";

import Life99Logo from "../../../assets/images/Life99Logo.svg";

const LoginPage = ({
  optLogin,
  handleOtpLogin,
  handleLoginValues,
  handleForgetPassword,
  handleLoginUser,
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="Logo">
              <img src={Life99Logo} alt="Life99" title="Life99" />
            </div>
          </Col>
          <Col md={12}>
            <div className="signuptitle">
              <span>Welcome Back</span>
              <p>Your one stop shop for all retirement needs</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Label>Mobile/Email</Label>
            <Input
              type="text"
              name="mobemail"
              onChange={(e) => handleLoginValues("email", e.target.value)}
            />
          </Col>
        </Row>
        {optLogin === false ? (
          <Row>
            <Col md={6}>
              <Label>Password</Label>
              <Input
                type="text"
                name="passoword"
                onChange={(e) => handleLoginValues("password", e.target.value)}
              />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md={6}>
              <Label>Enter OTP</Label>
              <Input
                type="text"
                name="passoword"
                onChange={(e) => handleLoginValues("otp", e.target.value)}
              />
            </Col>
          </Row>
        )}

        <Row>
          <Col md={12}>
            {optLogin === false ? (
              <span>
                <a
                  href=""
                  onClick={(e) => handleForgetPassword("OptLoginView")}
                >
                  Forget Password
                </a>
              </span>
            ) : (
              <>
                <span>
                  OTP has been sent to the mobile number and email entered by
                  you.
                </span>
              </>
            )}
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <span>Login with OTP</span>
            <span>
              <Switch onClick={(e) => handleOtpLogin()} />
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button variant="contained" onClick={(e) => handleLoginUser()}>
              LogIn
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div>
              New user? <a href="/">Register now</a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
