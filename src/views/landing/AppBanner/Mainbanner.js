import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import slider1 from "../../../assets/images/Slider-ill/slider-img-1.svg";
import slider2 from "../../../assets/images/Slider-ill/slider-img-2.svg";
import slider3 from "../../../assets/images/Slider-ill/slider-img-3.svg";
import RetirementPeople from "../../../assets/images/retirement-people.svg";
import UseingEmployee from "../../../assets/images/useing-employee.svg";
import HappyEmployee from "../../../assets/images/happy-employee.svg";
import Qrcode from "../../../assets/images/QR-code.svg";
import Google from "../../../assets/images/Google.svg";
import Appstore from "../../../assets/images/Apple.svg";
import scroll from "../../../assets/images/GIF/Scroll.gif";
import homegif from "../../../assets/images/GIF/Home.gif";

const Mainbanner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Fragment>
      <div className="banner-section">
        <Row className="m-0">
          <Col className="p-0">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay={true}
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
                      <Col sm={7} className="">
                        <h1 className="banner-text">
                          Be smart with
                          <br />
                          your money. Start
                          <br />
                          <Link to="#">investing </Link>
                          today.
                        </h1>
                        <Row className="align-items-center employee-details">
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
                              <p className="employee-tagline">
                                Happy Employees{" "}
                              </p>
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
                      <Col sm={5} className="">
                        <img src={slider1}></img>
                      </Col>
                    </Row>
                    <div className="gif_scroll">
                      <img src={scroll} />
                      <p>Scroll down</p>
                    </div>
                  </Container>
                </div>
              </div>

              <div className="slider-block">
                <div className="section banner-section">
                  <Container className="retirement-container">
                    <Row className="title-row retirment-row  align-items-center">
                      <Col sm={7} className="">
                        <h1 className="banner-text">
                          Be smart with your <br />
                          money. Start{" "}
                          <Link to="#">
                            Goal <br />
                            planning
                          </Link>{" "}
                          today.
                        </h1>
                        <Row className="align-items-center employee-details">
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
                              <p className="employee-tagline">
                                Happy Employees{" "}
                              </p>
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
                      <Col sm={5} className="slider-two">
                        <img src={slider2}></img>
                        <img src={homegif} className="home-gif"></img>
                      </Col>
                    </Row>
                    <div className="gif_scroll">
                      <img src={scroll} />
                      <p>Scroll down</p>
                    </div>
                  </Container>
                </div>
              </div>

              <div className="slider-block">
                <div className="section banner-section">
                  <Container className="retirement-container">
                    <Row className="title-row retirment-row  align-items-center">
                      <Col sm={7} className="">
                        <h1 className="banner-text">
                          Be smart with your <br />
                          money. Buy{" "}
                          <Link to="#">
                            advisory <br /> plan{" "}
                          </Link>{" "}
                          today.
                        </h1>
                        <Row className="align-items-center employee-details">
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
                              <p className="employee-tagline">
                                Happy Employees{" "}
                              </p>
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
                      <Col sm={5} className="">
                        <img src={slider3}></img>
                      </Col>
                    </Row>
                    <div className="gif_scroll">
                      <img src={scroll} />
                      <p>Scroll down</p>
                    </div>
                  </Container>
                </div>
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Mainbanner;
