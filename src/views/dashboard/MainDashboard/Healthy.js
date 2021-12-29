import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import {Link} from "react-router-dom"



class Healthy extends Component {
    render() {

        return (
            <Fragment>
                <div className="section healthymain-section">
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <div className="title-row">
                                    <h3 className="title-text">Stay Fit & healthy</h3>
                                </div>
                            </Col>
                        </Row>

                        <Row className="healthy-box">
                            <div className=" col-sm-12">
                                <div className="healthy-section">
                                    <p className="healthy-text">Wellbing</p>
                                    <p className="healthy-description col-sm-6">
                                        Explore our wellbeing section to learn more about fitness and health score & you can track your daily activity too
                                    </p>

                                    <div className="healthy-services">
                                        <Row className="align-items-center">
                                            <Col sm={3}>
                                                <div className="healthy-scrore">
                                                    <span className="helathy-counter">80</span>
                                                    <span className="helathy-counter-text">
                                                        Total health <br />
                                                        Score
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="row">
                                                    <div className="Bms-part col-sm-4">
                                                        <p>BMI</p>
                                                        <span>20.8</span>
                                                    </div>
                                                    <div className="Bms-part col-sm-4">
                                                        <p>BP</p>
                                                        <span>20.00</span>
                                                    </div>
                                                    <div className="Bms-part col-sm-4">
                                                        <p>Heart Rate</p>
                                                        <span>20.78</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={3} className="healthy-btn">
                                                <Button className=""><Link className="link" to="/wellbeing">Explore</Link></Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>



                <div className="section healthy-mobile-section">
                    <Container>
                        <Row className="">
                            <Col sm={12}>
                                <div className="healthy-scrore-mobile">
                                    <span className="helathy-counter">80</span>
                                    <span className="helathy-counter-text">
                                        Total health <br />
                                        Score
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <p className="healthy-text-mobile">Wellbing</p>
                                <p className="healthy-description-mobile col-sm-6">
                                    Explore our wellbeing section to learn more about fitness and health score & you can track your daily activity too
                                </p>
                            </Col>
                        </Row>
                        <Row className="bms-part-row-mobile">
                            <Col sm={12}>
                                <div className="Bms-part-mobile">
                                    <p>BMI</p>
                                    <span>20.8</span>
                                </div>
                            </Col>
                            <Col sm={4} xs={4} className="pt-3">
                                <div className="Bms-part-mobile">
                                    <p>BP</p>
                                    <span>20.8</span>
                                </div>
                            </Col>
                            <Col sm={4} xs={4} className="pt-3">
                                <div className="Bms-part-mobile">
                                    <p>Heart Rate</p>
                                    <span>20.8</span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Button className="explore-helathy-mobile col-5">Explore</Button>
                        </Row>
                    </Container>
                </div>


            </Fragment>
        );
    }
}

export default Healthy;
