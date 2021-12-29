import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import Footerlogo from "../../../assets/images/footerlogo.svg";
import Facebook from "../../../assets/images/Facebook.svg";
import Linkedin from "../../../assets/images/LinkedIN.svg";
import Youtube from "../../../assets/images/Youtube.svg";
import Twitter from "../../../assets/images/Twitter.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <Fragment>
      <div className="section footer-section">
        <Container>
          <Row className="mobile_footer">
            <Col sm={7}>
              <Row className="">
                <Col sm={4}>
                  <img
                    src={Footerlogo}
                    alt=""
                    className="img-fluid foooter-logo"
                  />
                </Col>
                <Col sm={3} className="mobile_footer_linkgroup">
                  <Link to="/dashboard" className="footer-link">
                    Dashboard
                  </Link>
                  <Link to="/invest" className="footer-link">
                    Invest
                  </Link>
                  <Link to="/advisory" className="footer-link">
                    Advisory
                  </Link>
                  <Link to="/plan" className="footer-link">
                    Plan{" "}
                  </Link>
                  <Link to="/learn" className="footer-link">
                    Learn
                  </Link>
                </Col>
                <Col sm={5} className="">
                  <Link to="#" className="footer-link">
                    Terms & Conditions
                  </Link>
                  <Link to="#" className="footer-link">
                    Contact us{" "}
                  </Link>
                  <Link to="#" className="footer-link">
                    Disclaimers{" "}
                  </Link>
                  <Link to="#" className="footer-link">
                    Code of conduct
                  </Link>
                  <Link to="/wellbeing" className="footer-link">
                    Wellbeing
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col sm={5} className="mobile-connected">
              <p className="footer-social-text">Stay connected to us</p>
              <Link to="#" className="footer-social-link">
                <img src={Facebook} alt="" className="img-fluid social-image" />
              </Link>
              <Link to="#" className="footer-social-link">
                <img src={Linkedin} alt="" className="img-fluid social-image" />
              </Link>
              <Link to="#" className="footer-social-link">
                <img src={Youtube} alt="" className="img-fluid social-image" />
              </Link>
              <Link to="#" className="footer-social-link">
                <img src={Twitter} alt="" className="img-fluid social-image" />
              </Link>

              <p className="copyright-text">
                © Copyright 2021 HDFC Pension - All Rights Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Footer;
