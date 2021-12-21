import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import Doctorconsultant from "../../../assets/images/Doctor-consultant.svg";
import Lifecommunity from "../../../assets/images/Life-community.svg";
import Medicinesoffers from "../../../assets/images/Medicines-offers.svg";
import RetiralAdvisor from "../../../assets/images/Retiral-Advisor.svg";
import TaxServices from "../../../assets/images/Tax-Services.svg";
import WillPlanning from "../../../assets/images/Will-Planning.svg";

const Services = () => {
  return (
    <>
      <div className="section services-section">
        <Container>
          <Row className="title-row align-items-center">
            <Col sm={12}>
              <h3 className="title-text">Choose the services</h3>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="services-detail">
                <Row className="align-items-center">
                  <Col sm={4}>
                    <img
                      src={RetiralAdvisor}
                      className="w-100"
                      alt="services"
                      title="services"
                    />
                  </Col>
                  <Col sm={8}>
                    <p className="services-title">Retiral Advisor</p>
                    <span className="services-description">
                      Stay between one and 12+ months
                      <br /> with the ability to transfer to other
                      <br /> homes in the Landing network.
                    </span>
                    <Link to="#" className="services-link">
                      Explore now
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="services-detail">
                <Row className="align-items-center">
                  <Col sm={4}>
                    <img
                      src={TaxServices}
                      className="w-100"
                      alt="services"
                      title="services"
                    />
                  </Col>
                  <Col sm={8}>
                    <p className="services-title">Tax Service</p>
                    <span className="services-description">
                      Stay between one and 12+ months
                      <br /> with the ability to transfer to other
                      <br /> homes in the Landing network.
                    </span>
                    <Link to="#" className="services-link">
                      Explore now
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="services-detail">
                <Row className="align-items-center">
                  <Col sm={4}>
                    <img
                      src={Medicinesoffers}
                      className="w-100"
                      alt="services"
                      title="services"
                    />
                  </Col>
                  <Col sm={8}>
                    <p className="services-title">Medicines offers</p>
                    <span className="services-description">
                      Stay between one and 12+ months
                      <br /> with the ability to transfer to other
                      <br /> homes in the Landing network.
                    </span>
                    <Link to="#" className="services-link">
                      Explore now
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="services-detail">
                <Row className="align-items-center">
                  <Col sm={4}>
                    <img
                      src={Lifecommunity}
                      className="w-100"
                      alt="services"
                      title="services"
                    />
                  </Col>
                  <Col sm={8}>
                    <p className="services-title">Life99 community</p>
                    <span className="services-description">
                      Stay between one and 12+ months
                      <br /> with the ability to transfer to other
                      <br /> homes in the Landing network.
                    </span>
                    <Link to="#" className="services-link">
                      Explore now
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="services-detail">
                <Row className="align-items-center">
                  <Col sm={4}>
                    <img
                      src={WillPlanning}
                      className="w-100"
                      alt="services"
                      title="services"
                    />
                  </Col>
                  <Col sm={8}>
                    <p className="services-title">Will Planning</p>
                    <span className="services-description">
                      Stay between one and 12+ months
                      <br /> with the ability to transfer to other
                      <br /> homes in the Landing network.
                    </span>
                    <Link to="#" className="services-link">
                      Explore now
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="services-detail">
                <Row className="align-items-center">
                  <Col sm={4}>
                    <img
                      src={Doctorconsultant}
                      className="w-100"
                      alt="services"
                      title="services"
                    />
                  </Col>
                  <Col sm={8}>
                    <p className="services-title">Doctor consultant</p>
                    <span className="services-description">
                      Stay between one and 12+ months
                      <br /> with the ability to transfer to other
                      <br /> homes in the Landing network.
                    </span>
                    <Link to="#" className="services-link">
                      Explore now
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
