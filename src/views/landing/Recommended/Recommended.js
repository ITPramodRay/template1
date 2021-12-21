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
              <h3 className="title-text">Recommended by Life 99</h3>
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
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={NationalPensionSystem}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={ClickProtectLife}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={HDFCLifeAnnuitySolutions}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={HDFCLifeSanchayPlus}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={NationalPensionSystem}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={ClickProtectLife}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={HDFCLifeAnnuitySolutions}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={HDFCLifeSanchayPlus}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={NationalPensionSystem}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={ClickProtectLife}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={HDFCLifeAnnuitySolutions}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={HDFCLifeSanchayPlus}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={NationalPensionSystem}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={ClickProtectLife}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={HDFCLifeAnnuitySolutions}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="slider-block">
                  <Container>
                    <Row className="">
                      <Col>
                        <Card className="cardbox">
                          <div className="cardimage text-right">
                            <CardImg
                              top
                              width="100%"
                              src={HDFCLifeSanchayPlus}
                              alt="Card image cap"
                              className="img-fluid"
                            />
                          </div>
                          <CardBody>
                            <CardTitle>
                              National Pension <br /> system
                            </CardTitle>
                            <CardText>
                              Lorem Ipsum is simply dummy <br />
                              text of the printing and
                            </CardText>
                            <Button className="recommended-btn">
                              Know More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Recommended;
