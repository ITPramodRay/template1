import React, { useState } from "react";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";
import { Button } from "@mui/material";

import Life99Logo from "../../../assets/images/Life99Logo.svg";

const SetPassword = ({ setPassword,err }) => {
  const [password, setPass] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
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
              <span>Set Password</span>
            </div>
          </Col>
        </Row>
        <div className="setpassword">
          <Row>
            <Col md={6}>
              <Label>Enter Password</Label>
              <Input
                type="text"
                name="password"
                onChange={(e) => setPass(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Label>Re-Enter Password</Label>
              <Input
                type="text"
                name="repassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button
                className="subbtn"
                onClick={() => setPassword(password, confirmPassword)}
              >Submit</Button> 
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SetPassword;
