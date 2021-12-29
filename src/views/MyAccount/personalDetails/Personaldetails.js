import React, { Component, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  NavItem,
  Nav,
  NavLink,
} from "reactstrap";
import Avtar from "../../../assets/images/myaccount/Avatar.png";
import Pencil from "../../../assets/images/myaccount/Pencil.svg";
import Bank from "../../../assets/images/myaccount/Bank.svg";
import CaretDown from "../../../assets/images/myaccount/CaretDown.svg";
import Checks from "../../../assets/images/myaccount/Checks.svg";
import CircleWavyCheck from "../../../assets/images/myaccount/CircleWavyCheck.svg";
import DeviceMobileCamera from "../../../assets/images/myaccount/DeviceMobileCamera.svg";
import IdentificationCard from "../../../assets/images/myaccount/IdentificationCard.svg";
import Pattern from "../../../assets/images/myaccount/pattern.svg";
import Receipt from "../../../assets/images/myaccount/Receipt.svg";
import ShareNetwork from "../../../assets/images/myaccount/ShareNetwork.svg";
import shield from "../../../assets/images/myaccount/shield.svg";
import UserCirclePlus from "../../../assets/images/myaccount/UserCirclePlus.svg";
import UserList from "../../../assets/images/myaccount/UserList.svg";
import whatsapp from "../../../assets/images/myaccount/whatsapp.svg";
class Personaldetails extends Component {
  render() {
    return (
      <Fragment>
        <div className="myaccount-detail-form Personal-details-form">
          <div className="myacoount-heeader">
            <Col className="borderbottom">
              <Row className="align-items-center">
                <Col sm={5}>
                  <div class="">
                    <img
                      src={IdentificationCard}
                      alt="person"
                      title="person"
                      className="persone-icon"
                    />
                    <p className="myaccount-title">Personal Details</p>
                  </div>
                </Col>
                <Col className="ms-auto text-right">
                  <div class="">
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      title="whatsapp"
                      className="whatsapp-img"
                    />
                    <span className="sharelink-text">
                      Get whatsapp notifications
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </div>
          <Form className="myaccount--main--form personal-main-form">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <div className="gender-all-btn">
                <Button className="gender-btn active">Male</Button>
                <Button className="gender-btn">Female</Button>
                <Button className="gender-btn">Others</Button>
              </div>
            </FormGroup>
            <Row>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampleEmail">First name</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampletext"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampletext">Last name</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampletext"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampletext">Date of Birth</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampletext"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="examplePassword">Marital Status</Label>
                <Input type="text" name="text" id="example" placeholder="" />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampleSelect">Occupation</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Salaried</option>
                  <option>Salaried</option>
                </Input>
                <img
                  src={CaretDown}
                  alt="CaretDown"
                  title="CaretDown"
                  className="downdown-image"
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampleSelect">Salary</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>10-15L</option>
                  <option>10-15L</option>
                </Input>
                <img
                  src={CaretDown}
                  alt="CaretDown"
                  title="CaretDown"
                  className="downdown-image"
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampleSelect">Residential Status</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Resident</option>
                  <option>Resident</option>
                </Input>
                <img
                  src={CaretDown}
                  alt="CaretDown"
                  title="CaretDown"
                  className="downdown-image"
                />
              </FormGroup>
              <FormGroup className="col-sm-12 input-div">
                <Label for="examplePassword">Address 01</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="example"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampletext">Pincode</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampletext"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampletext">City</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampletext"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampleSelect">State</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Gujrat</option>
                  <option>Gujrat</option>
                </Input>
                <img
                  src={CaretDown}
                  alt="CaretDown"
                  title="CaretDown"
                  className="downdown-image"
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampleSelect">Country</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>India</option>
                  <option>India</option>
                </Input>
                <img
                  src={CaretDown}
                  alt="CaretDown"
                  title="CaretDown"
                  className="downdown-image"
                />
              </FormGroup>
              <FormGroup className="col-sm-12 input-div">
                <Label for="examplePassword">Address 02</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="example"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampletext">Pincode</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampletext"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampletext">City</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampletext"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampleSelect">State</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Gujrat</option>
                  <option>Gujrat</option>
                </Input>
                <img
                  src={CaretDown}
                  alt="CaretDown"
                  title="CaretDown"
                  className="downdown-image"
                />
              </FormGroup>
              <FormGroup className="col-sm-6 input-div">
                <Label for="exampleSelect">Country</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>India</option>
                  <option>India</option>
                </Input>
                <img
                  src={CaretDown}
                  alt="CaretDown"
                  title="CaretDown"
                  className="downdown-image"
                />
              </FormGroup>
              <FormGroup className="col-sm-6 ">
                <Button className="myaccount-btn">Save Details</Button>
              </FormGroup>
            </Row>
          </Form>
        </div>
      </Fragment>
    );
  }
}
export default Personaldetails;
