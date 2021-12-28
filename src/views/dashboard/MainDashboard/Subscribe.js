import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import Subscribeimg from "../../../assets/images/Main-Dashbaord/subscribe.svg";
import Google from "../../../assets/images/Main-Dashbaord/Google.svg";
import Apple from "../../../assets/images/Main-Dashbaord/Apple.svg";
import Bulb from "../../../assets/images/Main-Dashbaord/bulb.svg";


class Subscribe extends Component {
    render() {

        return (
            <Fragment>
                <div className="subscribe-section">
                    <Container fluid={true}>
                        <Row>
                            <Col sm={6}>
                                <p className="subscribe-text mb-0">Plan your retirement well</p>
                            </Col>
                            <Col sm={2}>
                                <img src={Subscribeimg} alt="subscribe" title="subscribe" className="w-100 subscribe-iamge" />
                            </Col>
                            <Col sm={4}>
                                <div className="d-flex subscribe-app">
                                    <a href="#">
                                        <img src={Google} alt="Google" title="Google" className="w-100 " />
                                    </a>
                                    <a href="#">
                                        <img src={Apple} alt="Apple" title="Apple" className="w-100 " />
                                    </a>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
                <div className="comming-soon-section">
                    <Container>
                        <Row>
                            <Col xs={2}>
                                <img src={Bulb} alt="bulb" title="bulb" className="w-100 bulb-iamge" />
                            </Col>
                            <Col xs={10}>
                                <p className="coming-soontext">Coming Soon</p>
                                <span className="coming-soon-desc">Our advisory service is coming soon for you to guide in your retirement journey</span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Subscribe;
