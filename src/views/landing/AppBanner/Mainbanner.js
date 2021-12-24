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
import { MainbannerCms } from "../landingCMS";

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
            <div className="slider-block">
              <div className="section banner-section">
                <Container className="retirement-container">
                  <Row className="retirment-row  align-items-center">
                    <Col sm={7} className="p-0">
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
                        {MainbannerCms.mainHeading.map((value, key) => {
                          return (
                            <h1 key={key} className="banner-text">
                              {value.preLink}{" "}
                              <Link to={value.link}>{value.linkText}</Link>
                              {value.postLink}
                            </h1>
                          );
                        })}
                      </Carousel>
                      <Row className="align-items-center employee-details">
                        <Col sm={4}>
                          <div className="employee-block">
                            <div className="d-flex">
                              <img
                                src={MainbannerCms.userStatistics.stat1.icon || RetirementPeople}
                                alt="RetirementPeople"
                                title="RetirementPeople"
                                className=""
                              ></img>
                              <span className="total-employee">{MainbannerCms.userStatistics.stat1.countText}</span>
                              <span className="plus-sign">+</span>
                            </div>
                            <p className="employee-tagline">
                            {MainbannerCms.userStatistics.stat1.text}{" "}
                            </p>
                          </div>
                        </Col>
                        <Col sm={4}>
                          <div className="employee-block">
                            <div className="d-flex">
                              <img
                                src={MainbannerCms.userStatistics.stat2.icon || UseingEmployee}
                                alt="UseingEmployee"
                                title="UseingEmployee"
                                className=""
                              ></img>
                              <span className="total-employee">{MainbannerCms.userStatistics.stat2.countText}</span>
                              <span className="plus-sign">+</span>
                            </div>
                            <p className="employee-tagline">
                            {MainbannerCms.userStatistics.stat2.text}
                            </p>
                          </div>
                        </Col>
                        <Col sm={4}>
                          <div className="employee-block">
                            <div className="d-flex">
                              <img
                                src={MainbannerCms.userStatistics.stat3.icon || HappyEmployee}
                                alt="HappyEmployee"
                                title="HappyEmployee"
                                className=""
                              ></img>
                              <span className="total-employee">{MainbannerCms.userStatistics.stat3.countText}</span>
                              <span className="plus-sign">+</span>
                            </div>
                            <p className="employee-tagline">{MainbannerCms.userStatistics.stat3.text} </p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={3} className="text-center">
                          <div className="qr-code-frame">
                            <img
                              src={MainbannerCms.qrCode || Qrcode}
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
                        {MainbannerCms.rightSideImages.map((value, key) => {
                          return (
                            <span key={key}>
                              <img alt="" src={slider2}></img>
                              <img
                                alt=""
                                src={homegif}
                                className="home-gif"
                              ></img>
                            </span>
                          );
                        })}
                        {/* <img src={slider2}></img>
                          <img src={homegif} className="home-gif"></img> */}
                      </Carousel>
                    </Col>
                  </Row>
                  <div className="gif_scroll">
                    <img src={scroll} />
                    <p>Scroll down</p>
                  </div>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Mainbanner;
