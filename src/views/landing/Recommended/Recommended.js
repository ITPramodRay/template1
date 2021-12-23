import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const Recommended = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="section Recommeded-section">
        <Container>
          <Row className="title-row align-items-center">
            <Col sm={12}>
              <h3 className="title-text">{recommendedCms.sectionHeading}</h3>
            </Col>
          </Row>

          <Row>
            <Col className="Recommended-slider">
              <Carousel
                additionalTransfrom={0}
                arrows={true}
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
                slidesToSlide={2}
                swipeable
                responsive={responsive}
              >
                {recommendedCms.cards.map((value, key) => {
                  return (
                    <div key={key} className="slider-block">
                      <Container>
                        <Row className="">
                          <Col>
                            <Card className="cardbox" style={{background: `${value.backgroundGradient}` }}>
                              <div className="cardimage text-right">
                                <CardImg
                                  top
                                  width="100%"
                                  src={value.img || NationalPensionSystem}
                                  alt="Card image cap"
                                  className="img-fluid"
                                />
                              </div>
                              <CardBody>
                                <CardTitle style={{color:`${value.textColor}`}}>{value.mainText}</CardTitle>
                                <CardText style={{color:`${value.textColor}`}}>{value.subText}</CardText>
                                <Button className="recommended-btn">
                                  Know More
                                </Button>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Recommended;
