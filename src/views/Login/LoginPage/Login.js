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
  errorToast,
  validationError,
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="Logo">
              <img src={Life99Logo} alt="Life99" title="Life99" />
              <h2 className="error_text">{errorToast}</h2>
            </div>
          </Col>
          <Col md={12}>
            <div className="signuptitle">
              <span>Welcome Back</span>
              <p>Your one stop shop for all retirement needs</p>
            </div>
          </Col>
        </Row>
        <div className="loginfrm">
        <Row>
          <Col md={6}>
            <Label>Mobile/Email</Label>
            <Input
              type="text"
              name="mobemail"
              onChange={(e) => handleLoginValues("email", e.target.value)}
            />
            <p>{validationError && validationError["email"]}</p>
          </Col>
        </Row>
        {optLogin === false ? (
          <Row className="mt-3">
            <Col md={6}>
              <Label>Password</Label>
              <Input
                type="password"
                name="passoword"
                onChange={(e) => handleLoginValues("password", e.target.value)}
              />
              <p>{validationError && validationError["password"]}</p>
            </Col>
          </Row>
        ) : (
          <Row className="mt-3">
            <Col md={6}>
              <Label>Enter OTP</Label>
              <Input
                type="text"
                name="otp"
                onChange={(e) => handleLoginValues("otp", e.target.value)}
              />
              <p>{validationError && validationError["otp"]}</p>
            </Col>
          </Row>
        )}

        <Row>
          <Col md={12}>
            {optLogin === false ? (
              <span>
                <Button
                  href=""
                  onClick={(e) => handleForgetPassword("ForgetPassword")}
                >
                  Forget Password
                </Button>
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

        <Row className="mt-4">
          <Col md={12}>
            <div className="loginotptitle">
              <h4>Login with OTP</h4>
              <Switch onClick={(e) => handleOtpLogin()} />
              </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button className="loginbtn" variant="contained" onClick={(e) => handleLoginUser()}>
              LogIn
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="reg_text">
              New user?{" "}
              <a href="/">
                <b>Register now</b>
              </a>
            </div>
          </Col>
        </Row>
        </div>
      </Container>

    </>
  );
};

export default LoginPage;
