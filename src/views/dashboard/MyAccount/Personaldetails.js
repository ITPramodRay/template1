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
        <div className="myaccount-component  Personal-details-component">
          <Row className="">
            <Col sm={4}>
              <div className="persone-card">
                <Row className="align-items-center">
                  <img
                    src={Pattern}
                    alt="Pattern"
                    title="Pattern"
                    className=" person-pattern-img"
                  />
                  <Col sm={4}>
                    <div className="person-edit-block">
                      <img
                        src={Avtar}
                        alt="Person"
                        title="Person"
                        className="w-100"
                      />
                      <div className="persone-edit">
                        <Button className="person-edit-btn">
                          <img src={Pencil} alt="Pencil" title="Pencil" />
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col sm={8}>
                    <p className="person-name mb-0">Ramesh Nair</p>
                    <span className="persone-job">Engineer at BB Agency</span>
                  </Col>
                </Row>
                <Row className="align-items-center pt-3">
                  <Col sm={6}>
                    <p className="signed-text mb-0">Signed in as</p>
                    <span className="signed-persone">Ramesh Nair</span>
                  </Col>
                  <Col sm={6}>
                    <Button className="logout-btn">Logout</Button>
                  </Col>
                </Row>
              </div>
              <div className="corporate-card">
                <Row className="align-items-center">
                  <Col sm={2}>
                    <img
                      src={shield}
                      alt="shield"
                      title="shield"
                      className="w-100"
                    />
                  </Col>
                  <Col sm={6}>
                    <p className="link-text mb-0">Link Corporate Account</p>
                  </Col>
                  <Col sm={4} className="p-0">
                    <Button className="link-now-btn">Link Now</Button>
                  </Col>
                </Row>
              </div>
              <div className="myaccount-menus-card">
                <Nav className="myaccountmenu-list" navbar>
                  <NavItem>
                    <NavLink href="/" className="active">
                      <img
                        src={IdentificationCard}
                        alt="IdentificationCard"
                        title="IdentificationCard"
                      />
                      Personal Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">
                      <img
                        src={CircleWavyCheck}
                        alt="CircleWavyCheck"
                        title="CircleWavyCheck"
                      />
                      KYC Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">
                      <img src={Bank} alt="Bank" title="Bank" />
                      Bank Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">
                      <img
                        src={DeviceMobileCamera}
                        alt="DeviceMobileCamera"
                        title="DeviceMobileCamera"
                      />
                      Contact Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">
                      <img
                        src={UserCirclePlus}
                        alt="UserCirclePlus"
                        title="UserCirclePlus"
                      />
                      Add Nominee
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">
                      <img src={UserList} alt="UserList" title="UserList" />
                      Corporate Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">
                      <img src={Receipt} alt="Receipt" title="Receipt" />
                      Transcation
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">
                      <img
                        src={ShareNetwork}
                        alt="ShareNetwork"
                        title="ShareNetwork"
                      />
                      Refer a Friend
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">
                      <img src={Checks} alt="Checks" title="Checks" />
                      Preapproved Insurance
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>

            <Col sm={8}>
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
                      <Col className="ms-auto text-end">
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
                      <Input
                        type="text"
                        name="text"
                        id="example"
                        placeholder=""
                      />
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
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Personaldetails;
