import React, { useState } from "react";
import { Container, Row, Col, Form, Input, Label } from "reactstrap";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import Life99Logo from "../../../assets/images/Life99Logo.svg";
import UpdatePasswordValidation from "./UpdatePasswordValidation";
import { LoginAndRegisterPagePaths } from "../../../utils/RoutingConstants";

const UpdatePassword = ({ location }) => {
  const [passoworData, setPassowordData] = useState({
    password: "",
    confPassword: "",
  });
  const [validationError, setValidationError] = useState({});
  const [toastError, setToasteError] = useState();
  const [passwordType, setPasswordType] = useState({
    passwordOne: "password",
    passwordTwo: "password",
  });
  const history = useHistory();
  let baseUrl = "https://api-uat.life99.in/";
  let passwordChangeToken = location.state.token;

  const config = {
    headers: { Authorization: `Bearer ${passwordChangeToken}` },
  };

  let passowordChangeUrl = `${baseUrl}api-mdm/auth/set-password`;

  const handlePasswordChanged = () => {
    setToasteError("Password updated successfully");
    setTimeout(() => {
      history.push(LoginAndRegisterPagePaths.loginPage);
    }, 250);
  };

  const handleChangePassword = async () => {
    let checkValidation = UpdatePasswordValidation(passoworData);
    setValidationError(checkValidation);
    if (Object.keys(checkValidation).length === 0) {
      await Axios.put(passowordChangeUrl, passoworData, config).then(
        (res) =>
          res.data.message === "Password updated successfully" &&
          handlePasswordChanged()
      );
    }
  };

  // show and hides passoword
  const handlePasswordOneShowHide = (type, typeOfPassword) => {
    console.log(type, typeOfPassword);
    type == "show" && typeOfPassword == "passwordOne"
      ? setPasswordType({ ...passwordType, passwordOne: "text" })
      : setPasswordType({ ...passwordType, passwordOne: "password" });
  };
  const handlePasswordTwoShowHide = (type, typeOfPassword) => {
    type == "show" && typeOfPassword == "passswordTwo"
      ? setPasswordType({ ...passwordType, passwordTwo: "text" })
      : setPasswordType({ ...passwordType, passwordTwo: "password" });
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="Logo">
              <img src={Life99Logo} alt="Life99" title="Life99" />
              <h2>{toastError}</h2>
            </div>
          </Col>
          <Col md={12}>
            <div className="signuptitle">
              <span>Set Password</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Label>Enter Password</Label>
            <Input
              type={passwordType.passwordOne}
              name="password"
              value={passoworData.password}
              onChange={(e) =>
                setPassowordData({
                  ...passoworData,
                  password: e.target.value,
                })
              }
            />
            {passwordType.passwordOne === "password" ? (
              <VisibilityOffIcon
                onClick={() => handlePasswordOneShowHide("show", "passwordOne")}
              />
            ) : (
              <RemoveRedEyeIcon
                onClick={() => handlePasswordOneShowHide("hide", "passwordOne")}
              />
            )}
            <p>{validationError && validationError?.password}</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Label>Re-Enter Password</Label>
            <Input
              type={passwordType.passwordTwo}
              name="repassword"
              value={passoworData.confPassword}
              onChange={(e) =>
                setPassowordData({
                  ...passoworData,
                  confPassword: e.target.value,
                })
              }
            />
            {passwordType.passwordTwo === "password" ? (
              <VisibilityOffIcon
                onClick={() =>
                  handlePasswordTwoShowHide("show", "passswordTwo")
                }
              />
            ) : (
              <RemoveRedEyeIcon
                onClick={() =>
                  handlePasswordTwoShowHide("hide", "passswordTwo")
                }
              />
            )}
            <p>
              {(validationError && validationError?.confPassword) ||
                validationError?.matchError}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <input
              className="subbtn"
              type="submit"
              name="Submit"
              onClick={() => handleChangePassword()}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UpdatePassword;
