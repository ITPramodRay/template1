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

import ClickProtectLife from "../../../assets/images/Click -Protect-Life.svg";
import HDFCLifeAnnuitySolutions from "../../../assets/images/HDFC-Life-Annuity-Solutions.svg";
import HDFCLifeSanchayPlus from "../../../assets/images/HDFC-Life-Sanchay-Plus.svg";
import NationalPensionSystem from "../../../assets/images/National-Pension-System.svg";
import { recommendedCms } from "../landingCMS";

import "./recommended.scss";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  className: "slider-inner",
};

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
  return (
    <>
      <div className="section Recommeded-section">
        <Container>
          <Row className="title-row align-items-center">
            <Col sm={12} md={8}>
              <h3 className="title-text">{recommendedCms.sectionHeading}</h3>
            </Col>
            <Col sm={12} md={4} className="d-flex justify-content-end">
              <div className="controls d-flex gap-3">
                <button onClick={() => slider?.current?.slickPrev()}>
                  Prev
                </button>
                <button onClick={() => slider?.current?.slickNext()}>
                  Next
                </button>
              </div>
            </Col>
          </Row>

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
