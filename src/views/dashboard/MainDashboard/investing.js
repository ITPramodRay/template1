import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import Chart from "../../../assets/images/Main-Dashbaord/ChartLine.svg";
import Umbrella from "../../../assets/images/Main-Dashbaord/Umbrella.svg";




class Investing extends Component {
    render() {

        return (
            <Fragment>
                <div className="section investing-section">
                    <Container>
                        <Row className="align-items-center title-row">
                            <Col sm={10} md={10} xs={8}>
                                <div className="">
                                    <h3 className="title-text">Start investing to retire well</h3>
                                </div>
                            </Col>
                            <Col sm={2} md={2} xs={4} className="titlewith-link text-center">
                                <a href="#" className="text-right"> View All</a>
                            </Col>
                        </Row>

                        <Row>

                            <Col md={4}>
                                <div className='investcardbox'>
                                    <img src={Chart} alt="NPS" title="NPS" />
                                    <a href='#'>Buy Now</a>
                                    <span>NPS</span>
                                    <p>Get started smart investment<br /> in NPS</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='investcardbox'>
                                    <img src={Umbrella} alt="NPS" title="NPS" />
                                    <a href='#'>Buy Now</a>
                                    <span>PPF</span>
                                    <p>Most popular long term saving
                                        <br />schemes</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='investcardbox'>
                                    <img src={Chart} alt="NPS" title="NPS" />
                                    <a href='#'>Buy Now</a>
                                    <span>Insurance maturity<br /> benefits </span>
                                    <p>Get started smart investment in NPS</p>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Investing;
