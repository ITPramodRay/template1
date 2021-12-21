import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";

import InfiniteCarousel from "react-leaf-carousel";

import User1 from "../../../assets/images/user1.svg";

class Testimonials extends Component {
  render() {
    return (
      <Fragment>
        <div className="section Users-section">
                    <Container>
                        <Row className="title-row align-items-center">
                            <Col sm={12}>
                                <h3 className="title-text">What our users are saying</h3>
                            </Col>
                        </Row>
                    </Container>

                    <Row className="m-0 users-slider">
                        <InfiniteCarousel
                            breakpoints={[
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                    },
                                },
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 1366,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    },
                                },
                            ]}
                            dots={false}
                            showSides={true}
                            sidesOpacity={0.5}
                            sideSize={0.1}
                            slidesToScroll={1}
                            slidesToShow={3}
                            scrollOnDevice={true}
                        >
                            <div className="users-block">
                                <p className="saying">Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a</p>
                                <p className="saying">single team across multiple timezones and functions</p>
                                <div className="d-flex user-information">
                                    <div className="user-image">
                                        <img src={User1} alt="user" title="title" />
                                    </div>
                                    <div className="user-detail">
                                        <p className="user-name">Ashish Kashyap</p>
                                        <p className="user-position">Co-Founder & CEO <br /> INDWealth</p>
                                    </div>
                                </div>
                            </div>
                            <div className="users-block">
                                <p className="saying">Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a</p>
                                <p className="saying">single team across multiple timezones and functions</p>
                                <div className="d-flex user-information">
                                    <div className="user-image">
                                        <img src={User1} alt="user" title="title" />
                                    </div>
                                    <div className="user-detail">
                                        <p className="user-name">Ashish Kashyap</p>
                                        <p className="user-position">Co-Founder & CEO <br /> INDWealth</p>
                                    </div>
                                </div>
                            </div>
                            <div className="users-block">
                                <p className="saying">Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a</p>
                                <p className="saying">single team across multiple timezones and functions</p>
                                <div className="d-flex user-information">
                                    <div className="user-image">
                                        <img src={User1} alt="user" title="title" />
                                    </div>
                                    <div className="user-detail">
                                        <p className="user-name">Ashish Kashyap</p>
                                        <p className="user-position">Co-Founder & CEO <br /> INDWealth</p>
                                    </div>
                                </div>
                            </div>
                            <div className="users-block">
                                <p className="saying">Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a</p>
                                <p className="saying">single team across multiple timezones and functions</p>
                                <div className="d-flex user-information">
                                    <div className="user-image">
                                        <img src={User1} alt="user" title="title" />
                                    </div>
                                    <div className="user-detail">
                                        <p className="user-name">Ashish Kashyap</p>
                                        <p className="user-position">Co-Founder & CEO <br /> INDWealth</p>
                                    </div>
                                </div>
                            </div>
                            <div className="users-block">
                                <p className="saying">Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a</p>
                                <p className="saying">single team across multiple timezones and functions</p>
                                <div className="d-flex user-information">
                                    <div className="user-image">
                                        <img src={User1} alt="user" title="title" />
                                    </div>
                                    <div className="user-detail">
                                        <p className="user-name">Ashish Kashyap</p>
                                        <p className="user-position">Co-Founder & CEO <br /> INDWealth</p>
                                    </div>
                                </div>
                            </div>
                            <div className="users-block">
                                <p className="saying">Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a</p>
                                <p className="saying">single team across multiple timezones and functions</p>
                                <div className="d-flex user-information">
                                    <div className="user-image">
                                        <img src={User1} alt="user" title="title" />
                                    </div>
                                    <div className="user-detail">
                                        <p className="user-name">Ashish Kashyap</p>
                                        <p className="user-position">Co-Founder & CEO <br /> INDWealth</p>
                                    </div>
                                </div>
                            </div>
                            <div className="users-block">
                                <p className="saying">Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a</p>
                                <p className="saying">single team across multiple timezones and functions</p>
                                <div className="d-flex user-information">
                                    <div className="user-image">
                                        <img src={User1} alt="user" title="title" />
                                    </div>
                                    <div className="user-detail">
                                        <p className="user-name">Ashish Kashyap</p>
                                        <p className="user-position">Co-Founder & CEO <br /> INDWealth</p>
                                    </div>
                                </div>
                            </div>
                            

                        </InfiniteCarousel>
                    </Row>
                </div>
      </Fragment>
    );
  }
}

export default Testimonials;
