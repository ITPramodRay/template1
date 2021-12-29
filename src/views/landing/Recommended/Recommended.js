import React, { useRef } from "react";
import Slider from "react-slick";
import "../../../assets/styles/Slider/SlickGlobal.scss";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

import leftArrow from "../../../assets/images/left-arrow-icon.svg";
import rightArrow from "../../../assets/images/right-arrow-icon.svg";

import ClickProtectLife from "../../../assets/images/Click -Protect-Life.svg";
import HDFCLifeAnnuitySolutions from "../../../assets/images/HDFC-Life-Annuity-Solutions.svg";
import HDFCLifeSanchayPlus from "../../../assets/images/HDFC-Life-Sanchay-Plus.svg";
import NationalPensionSystem from "../../../assets/images/National-Pension-System.svg";
import { recommendedCms } from "../landingCMS";

import "./recommended.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      next
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      prev
    </div>
  );
}

const Recommended = () => {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    autplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="section Recommeded-section">
        <Container className="mb-5 mb-lg-8">
          <Row className="align-items-center">
            <Col sm={12} md={8}>
              <h3 className="title-text">{recommendedCms.sectionHeading}</h3>
            </Col>
            <Col
              sm={12}
              md={4}
              className="d-none d-lg-flex justify-content-end mt-4 mt-lg-0"
            >
              <div className="controls d-flex gap-4">
                <button
                  className="text-btn"
                  onClick={() => slider?.current?.slickPrev()}
                >
                  <img src={leftArrow} alt="" />
                </button>
                <button
                  className="text-btn"
                  onClick={() => slider?.current?.slickNext()}
                >
                  <img src={rightArrow} alt="" />
                </button>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <section className="Recommended-slider">
            <Slider ref={slider} {...settings}>
              {recommendedCms.cards.map((value, key) => {
                return (
                  <div key={key} className="slider-block">
                    <Card
                      className="cardbox"
                      style={{
                        background: `${value.backgroundGradient}`,
                      }}
                    >
                      <div className="cardimage text-end">
                        <CardImg
                          top
                          width="100%"
                          src={value.img || NationalPensionSystem}
                          alt="Card image cap"
                          className="img-fluid"
                        />
                      </div>
                      <CardBody>
                        <CardTitle style={{ color: `${value.textColor}` }}>
                          {value.mainText}
                        </CardTitle>
                        <CardText style={{ color: `${value.textColor}` }}>
                          {value.subText}
                        </CardText>
                        <Button className="recommended-btn">Know More</Button>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}

              {recommendedCms.cards.map((value, key) => {
                return (
                  <div key={key} className="slider-block">
                    <Card
                      className="cardbox"
                      style={{
                        background: `${value.backgroundGradient}`,
                      }}
                    >
                      <div className="cardimage text-end">
                        <CardImg
                          top
                          width="100%"
                          src={value.img || NationalPensionSystem}
                          alt="Card image cap"
                          className="img-fluid"
                        />
                      </div>
                      <CardBody>
                        <CardTitle style={{ color: `${value.textColor}` }}>
                          {value.mainText}
                        </CardTitle>
                        <CardText style={{ color: `${value.textColor}` }}>
                          {value.subText}
                        </CardText>
                        <Button className="recommended-btn">Know More</Button>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </Slider>
          </section>
        </Container>
      </div>
    </>
  );
};

export default Recommended;
