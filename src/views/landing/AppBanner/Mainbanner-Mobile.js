import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

import Banner1 from "../../../assets/images/Mobile/Landingpage/mobile-banner1.svg";
import UseingEmployee from "../../../assets/images/useing-employee.svg";
import HappyEmployee from "../../../assets/images/happy-employee.svg";
import Qrcode from "../../../assets/images/QR-code.svg";
import Google from "../../../assets/images/Google.svg";
import Appstore from "../../../assets/images/Apple.svg";


class Mainbanner extends Component {
  render() {
    const responsive = {

      mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };
    return (
      <Fragment>
        <div className="banner-section">
          <Row className="m-0">
            <Col className="p-0">
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay={false}
                autoPlaySpeed={5000}
                centerMode={false}
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderDotsOutside={false}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                responsive={responsive}
              >
                <div className="slider-block">
                  <div className="section banner-section">
                    <Container className="retirement-container">
                      <Row className="title-row retirment-row  align-items-center">
                        <Col sm={12} className="">
                          <h1 className="banner-text">
                            Be smart with
                            <br />
                            your money. Start
                            <br />
                            <Link to="#">investing </Link>
                            today.
                          </h1>

                          <div className="mobilebanner-image">
                            <img src={Banner1} alt="banner" title="Banner" />
                          </div>
                          <Row>
                            <Col sm={12}>
                              <div className="banner-download-application">
                                <p className="text-white">
                                  Download free app
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
                </div>

                <div className="slider-block">
                  <div className="section banner-section">
                    <Container className="retirement-container">
                      <Row className="title-row retirment-row  align-items-center">
                        <Col sm={12} className="">
                          <h1 className="banner-text">
                            Be smart with your <br />
                            money. Start <Link to="#">Goal <br />planning</Link> today.
  </h1>

                          <div className="mobilebanner-image">
                            <img src={Banner1} alt="banner" title="Banner" />
                          </div>
                          <Row>
                            <Col sm={12}>
                              <div className="banner-download-application">
                                <p className="text-white">
                                  Download free app
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
                </div>

                <div className="slider-block">
                  <div className="section banner-section">
                    <Container className="retirement-container">
                      <Row className="title-row retirment-row  align-items-center">
                        <Col sm={12} className="">
                          <h1 className="banner-text">
                            Be smart with your <br />
                            money. Buy <Link to="#">advisory <br /> plan </Link> today.
                          </h1>
                          <div className="mobilebanner-image">
                            <img src={Banner1} alt="banner" title="Banner" />
                          </div>
                          <Row>
                            <Col sm={12}>
                              <div className="banner-download-application">
                                <p className="text-white">
                                  Download free app
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
                </div>
              </Carousel>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Mainbanner;
