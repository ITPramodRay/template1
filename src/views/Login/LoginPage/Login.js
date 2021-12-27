import React, { useState } from "react";
import { Col, Container, Input, Label, Row } from "reactstrap";
import { Switch, Button, Link } from "@mui/material";
import { useHistory } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Life99Logo from "../../../assets/images/Life99Logo.svg";
import { LoginAndRegisterPagePaths } from "../../../utils/RoutingConstants";
import Timer from "../../common/timer";

const LoginPage = ({
  loginUserData,
  handleOtpLogin,
  handleLoginValues,
  handleForgetPassword,
  handleLoginUser,
  errorToast,
  validationError,
  handlePasswordShowHide,
  passwordType,
  timer,
}) => {
  const history = useHistory();
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
                value={loginUserData.email}
              />
              <p className="error_text">
                {validationError && validationError["email"]}
              </p>
            </Col>
          </Row>
          {loginUserData.otpBased === false ? (
            <Row className="mt-3">
              <Col md={6}>
                <Label>Password</Label>
                <Input
                  type={passwordType}
                  name="passoword"
                  onChange={(e) =>
                    handleLoginValues("password", e.target.value)
                  }
                  value={loginUserData.password}
                />

                {/* {passwordType === "password" ? (
                  <VisibilityOffIcon
                    onClick={() => handlePasswordShowHide("show")}
                  />
                ) : (
                  <RemoveRedEyeIcon
                    onClick={() => handlePasswordShowHide("hide")}
                  />
                )} */}

                <p className="error_text">
                  {validationError && validationError["password"]}
                </p>
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
                  value={loginUserData.otp}
                />
                <p className="error_text">
                  {validationError && validationError["otp"]}
                </p>
              </Col>
            </Row>
          )}

          <Row>
            <Col md={6}>
              {loginUserData.otpBased === false ? (
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
            <Col md={4}>
              {timer && loginUserData.otpBased && (
                <Link>
                  <Timer />
                </Link>
              )}
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={4}>
              <div className="loginotptitle">
                <h4>Login with OTP</h4>
                <Switch
                  disabled={loginUserData.email == ""}
                  checked={loginUserData.otpBased}
                  onClick={(e) => handleOtpLogin()}
                />
                {loginUserData.email == "" && (
                  <Button onClick={(e) => handleOtpLogin()}></Button>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button
                className="loginbtn"
                variant="contained"
                onClick={(e) => handleLoginUser()}
              >
                LogIn
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="reg_text">
                New user?{" "}
                <Link
                  onClick={() =>
                    history.push(LoginAndRegisterPagePaths.RegisterPage)
                  }
                >
                  <b>Register now</b>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
