import React, { useState } from "react";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";

import Life99Logo from "../../../assets/images/Life99Logo.svg";

const SetPassword = ({ setPassword }) => {
  const [password, setPass] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
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
              <span>Set Password</span>
            </div>
          </Col>
        </Row>
        <Form className="setpassword">
          <Row>
            <Col md={6}>
              <Label>Enter Password</Label>
              <Input
                type="password"
                name="password"
                onChange={(e) => setPass(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Label>Re-Enter Password</Label>
              <Input
                type="password"
                name="repassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input
                className="subbtn"
                type="submit"
                name="Submit"
                onClick={() => setPassword(password, confirmPassword)}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default SetPassword;
