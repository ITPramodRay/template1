import React from "react";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";

import Life99Logo from "../../../assets/images/Life99Logo.svg";
import { Link } from "react-router-dom";
import Timer from "../../common/timer";
const SignUp = ({ handleSetRegister, registerUser, err }) => {
  
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
              <span>Let's Get Started</span>
              <p>Enter Your Details to start the register</p>
            </div>
          </Col>
        </Row>
        <div className="signupfrm">
          <Row>
            <Col md={6}>
              <Label>First Name</Label>
              <Input
                type="text"
                name="firstname"
                onChange={(e) => handleSetRegister("firstName", e.target.value)}
              />
              <h6 className="error_text">{err?.firstName||""}</h6>
            </Col>
            <Col md={6}>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lastname"
                onChange={(e) => handleSetRegister("lastName", e.target.value)}
              />
              <h6 className="error_text">{err?.lastName||""}</h6>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Label>Mobile/Email</Label>
              <Input
                type="text"
                name="mobemail"
                onChange={(e) => handleSetRegister("mobEmail", e.target.value)}
              />
              <h6 className="error_text">{err.apiMessage || err.mobEmail || ""}</h6>
            </Col>
            <Col md={6}>
              <Label>Age</Label>
              <Input
                type="number"
                name="age"
                onChange={(e) => handleSetRegister("age", e.target.value)}
              />
              <h6 className="error_text">{err.age || ''}</h6>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Label>Mobile number</Label>
              <Input
                type="text"
                name="mobemail"
                onChange={(e) => handleSetRegister("mobile", e.target.value)}
              />
              <h6 className="error_text">{err.mobile || ''}</h6>
            </Col>
            <Col md={6}>
              <Label>Income</Label>
              <Input
                type="text"
                name="income"
                onChange={(e) => handleSetRegister("income", e.target.value)}
              />
              <h6 className="error_text">{err.income || ''}</h6>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input type="checkbox" name="accept" />
              <span>
                {" "}
                I accept the{" "}
                <a href="">
                  terms & Conditions, Privacy policy & Legal Disclaimer{" "}
                </a>
                of HDFC pension{" "}
              </span>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input type="submit" name="Submit" onClick={registerUser} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="regalready">
                Already On Life99? <Link to="/login">Login</Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
