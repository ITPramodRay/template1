import React from "react";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";

import Life99Logo from "../../../assets/images/Life99Logo.svg";

const SignUp = ({ registerUser, setRegisterForm }) => {
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
        <Form className="signupfrm" onSubmit={(e) => registerUser(e)}>
          <Row>
            <Col md={6}>
              <Label>First Name</Label>
              <Input type="text" name="firstname" />
            </Col>
            <Col md={6}>
              <Label>Last Name</Label>
              <Input type="text" name="lastname" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Label>Mobile/Email</Label>
              <Input type="text" name="mobemail" />
            </Col>
            <Col md={6}>
              <Label>Age</Label>
              <Input type="number" name="age" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Label>Income</Label>
              <Input type="text" name="income" />
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
              <input type="submit" name="Submit" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div>
                Already On Life99? <a href="/">Login</a>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
