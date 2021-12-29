import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
// import RetirementPeople from '../../../assets/images/retirement-people.svg';

import RetirementPeople from "../../../assets/images/retirement-people.svg";
import UseingEmployee from "../../../assets/images/useing-employee.svg";
import HappyEmployee from "../../../assets/images/happy-employee.svg";
import Qrcode from "../../../assets/images/QR-code.svg";
import Google from "../../../assets/images/Google.svg";
import Appstore from "../../../assets/images/Apple.svg";

import "./banner.scss";

const Banner = () => {
  return (
    <Fragment>
      <div className="section banner-section">
        <Container className="retirement-container">
          <Row className="retirment-row  align-items-center">
            <Col sm={7} className="">
              <h1 className="banner-text">
                Be smart with
                <br />
                your money. Start
                <br />
                <Link to="#">investing </Link>
                today.
              </h1>
              <Row className="align-items-center">
                <Col sm={4}>
                  <div className="employee-block">
                    <div className="d-flex">
                      <img
                        src={RetirementPeople}
                        alt="RetirementPeople"
                        title="RetirementPeople"
                        className=""
                      ></img>
                      <span className="total-employee">1,20L</span>
                      <span className="plus-sign">+</span>
                    </div>
                    <p className="employee-tagline">
                      retirement planning Users{" "}
                    </p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="employee-block">
                    <div className="d-flex">
                      <img
                        src={UseingEmployee}
                        alt="UseingEmployee"
                        title="UseingEmployee"
                        className=""
                      ></img>
                      <span className="total-employee">1,5K</span>
                      <span className="plus-sign">+</span>
                    </div>
                    <p className="employee-tagline">
                      Employers using Life99 to plan
                    </p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="employee-block">
                    <div className="d-flex">
                      <img
                        src={HappyEmployee}
                        alt="HappyEmployee"
                        title="HappyEmployee"
                        className=""
                      ></img>
                      <span className="total-employee">20L</span>
                      <span className="plus-sign">+</span>
                    </div>
                    <p className="employee-tagline">Happy Employees </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={3} className="text-center">
                  <div className="qr-code-frame">
                    <img
                      src={Qrcode}
                      alt="Qr-code"
                      title="Qr-code"
                      className="qrcode-img"
                    ></img>
                  </div>
                </Col>
                <Col sm={7}>
                  <div className="banner-download-application">
                    <p className="text-white">
                      Scan QR code to
                      <br /> download the app
                    </p>
                    <a>
                      <img
                        src={Appstore}
                        alt="apple store"
                        title="apple store"
                      ></img>
                    </a>
                    <a>
                      <img
                        src={Google}
                        alt="google store"
                        title="google store"
                      ></img>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Banner;
