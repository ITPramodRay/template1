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
import following from "../../../assets/images/myaccount/Following.svg";

class PreapprovedInsurance extends Component {
  render() {
    return (
      <Fragment>
        <div className="myaccount-component  preinsurance-details-component">
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
              <div className="myaccount-detail-form preinsurance-details-form">
                <div className="myacoount-heeader">
                  <Col className="borderbottom">
                    <Row className="align-items-center">
                      <Col sm={5}>
                        <div class="">
                          <img
                            src={Checks}
                            alt="Checks"
                            title="Checks"
                            className="persone-icon"
                          />
                          <p className="myaccount-title">
                            Preapproved Insurance{" "}
                          </p>
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

                <Form className="myaccount--main--form preinsurance-main-form">
                  <Row>
                    <Col sm={6} className="">
                      <h5 className="insurance-desc">
                        You are eligible for the click to protect insurance
                        product
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>
                      <div className="insurnace-block">
                        <div className="insurnace-header">
                          <p className="insurence-bank">HDFC life insurance</p>
                          <span className="insurnece-percentage">
                            55% covered
                          </span>
                        </div>
                        <p className="insurence-data">
                          Based on your likely income untile retirement, you
                          need additional Rs. 70 Lac out of Rs 1 cr at peremium
                          of Rs 20,000 per annum
                        </p>
                        <Button className="insure-btn">insure now</Button>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="insurnace-block">
                        <div className="insurnace-header">
                          <p className="insurence-bank">HDFC life insurance</p>
                          <span className="insurnece-percentage">
                            55% covered
                          </span>
                        </div>
                        <p className="insurence-data">
                          Based on your likely income untile retirement, you
                          need additional Rs. 70 Lac out of Rs 1 cr at peremium
                          of Rs 20,000 per annum
                        </p>
                        <Button className="insure-btn">insure now</Button>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="insurnace-block">
                        <div className="insurnace-header">
                          <p className="insurence-bank">HDFC life insurance</p>
                          <span className="insurnece-percentage">
                            55% covered
                          </span>
                        </div>
                        <p className="insurence-data">
                          Based on your likely income untile retirement, you
                          need additional Rs. 70 Lac out of Rs 1 cr at peremium
                          of Rs 20,000 per annum
                        </p>
                        <Button className="insure-btn">insure now</Button>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="insurnace-block">
                        <div className="insurnace-header">
                          <p className="insurence-bank">HDFC life insurance</p>
                          <span className="insurnece-percentage">
                            55% covered
                          </span>
                        </div>
                        <p className="insurence-data">
                          Based on your likely income untile retirement, you
                          need additional Rs. 70 Lac out of Rs 1 cr at peremium
                          of Rs 20,000 per annum
                        </p>
                        <Button className="insure-btn">insure now</Button>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="insurnace-block">
                        <div className="insurnace-header">
                          <p className="insurence-bank">HDFC life insurance</p>
                          <span className="insurnece-percentage">
                            55% covered
                          </span>
                        </div>
                        <p className="insurence-data">
                          Based on your likely income untile retirement, you
                          need additional Rs. 70 Lac out of Rs 1 cr at peremium
                          of Rs 20,000 per annum
                        </p>
                        <Button className="insure-btn">insure now</Button>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="insurnace-block">
                        <div className="insurnace-header">
                          <p className="insurence-bank">HDFC life insurance</p>
                          <span className="insurnece-percentage">
                            55% covered
                          </span>
                        </div>
                        <p className="insurence-data">
                          Based on your likely income untile retirement, you
                          need additional Rs. 70 Lac out of Rs 1 cr at peremium
                          of Rs 20,000 per annum
                        </p>
                        <Button className="insure-btn">insure now</Button>
                      </div>
                    </Col>
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

export default PreapprovedInsurance;
