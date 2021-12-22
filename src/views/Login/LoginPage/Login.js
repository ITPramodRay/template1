import React from "react";
import { Col, Container, Input, Label, Row } from "reactstrap";
import Life99Logo from "../../../assets/images/Life99Logo.svg";
import { Switch, Button } from "@mui/material";

const LoginPage = ({
  optLogin,
  handleOtpLogin,
  handleLoginValues,
  handleSubmit,
}) => {
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
              onChange={(e) => handleLoginValues("mobEmial", e.target.value)}
            />
          </Col>
        </Row>
        {optLogin === false ? (
          <Row className="mt-3">
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
          <Row className="mt-3">
            <Col md={6}>
              <Label>Enter OTP</Label>
              <Input type="text" name="passoword" />
            </Col>
          </Row>
        )}

        <Row>
          <Col md={12}>
            <span>
              <a href="">Forget Password</a>
            </span>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={12}>
            <span>Login with OTP</span>
            <br></br>
            <span>
              <Switch onClick={(e) => handleOtpLogin()} />
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <button className="BTN_intro">LogIn Now</button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="reg_text">
              New user? <a href="/"><b>Register now</b></a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
