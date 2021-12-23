import React from "react";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";

import Life99Logo from "../../../assets/images/Life99Logo.svg";

const SignUp = ({ handleSetRegister,registerUser }) => {
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
            </Col>
            <Col md={6}>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lastname"
                onChange={(e) => handleSetRegister("lastName", e.target.value)}
              />
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
            </Col>
            <Col md={6}>
              <Label>Age</Label>
              <Input
                type="number"
                name="age"
                onChange={(e) => handleSetRegister("age", e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Label>Income</Label>
              <Input
                type="text"
                name="income"
                onChange={(e) => handleSetRegister("income", e.target.value)}
              />
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
                Already On Life99? <a href="/">Login</a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
