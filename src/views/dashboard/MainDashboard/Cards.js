import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Axis from "../../../assets/images/Main-Dashbaord/axis.svg";
import Links from "../../../assets/images/Main-Dashbaord/link.svg";
import Sbi from "../../../assets/images/Main-Dashbaord/sbi.svg";
import Tax from "../../../assets/images/Main-Dashbaord/tax.svg";
import Willplan from "../../../assets/images/Main-Dashbaord/will-planing.png";



class Cards extends Component {
    render() {
        return (
            <Fragment>
                <div className="banks-card-sction">
                    <div className='card-main-title'>
                        <Container>
                            <Row>
                                <h3 className='ps-0'>What’s new</h3>
                            </Row>
                        </Container>
                    </div>

                    <div className='bank-cards'>
                        <Container>
                            <Row className="bg-skyblue banks-size">
                                <Col sm={2} xs={3} className='p-0'>
                                    <img src={Sbi} className='w-100 bank-iamge' alt="sbi" title="sbi" />
                                </Col>

                                <Col sm={6} xs={9} className='p-0 '>
                                    <p className='bank-policy mb-0 darkblue-text'>SBI mutual fund  </p>
                                    <span className='bank-policy-desc lightblack-text'>Invest in SBI & get 7% interest rate  </span>
                                </Col>

                                <Col sm={4} className='cards-button '>
                                    <Button className='darkblue-text bg-darkblue text-white'>Explore</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className='bank-cards'>
                        <Container>
                            <Row className="bg-blue banks-size">
                                <Col sm={2} xs={3} className='p-0'>
                                    <img src={Links} className='w-100 bank-iamge' alt="sbi" title="sbi" />
                                </Col>

                                <Col sm={6} xs={9} className='p-0 '>
                                    <p className='bank-policy mb-0 blue-text'>Link your NPS </p>
                                    <span className='bank-policy-desc lightblack-text'>Link your current NPS account   </span>
                                </Col>

                                <Col sm={4} className='cards-button '>
                                    <Button className='blue-text bg-powderblue text-white'>Explore</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className='bank-cards willplan-card'>
                        <Container>
                            <Row className="bg-red banks-size">
                                <img src={Willplan} className='w-100 willplan-image' alt="willplan" title="willplan" />


                                <Col sm={12} className='p-0 '>
                                    <p className='bank-policy mb-0 text-white'>Will Planning</p>
                                    <p className='bank-policy-desc text-white'>Check out fitness offers & provides valuable healthy protection for you and your family. </p>
                                    <Button className=''>Explore</Button>
                                </Col>


                            </Row>
                        </Container>
                    </div>

                    <div className='bank-cards'>
                        <Container>
                            <Row className="bg-pink banks-size">
                                <Col sm={2} xs={3} className='p-0'>
                                    <img src={Axis} className='w-100 bank-iamge' alt="sbi" title="sbi" />
                                </Col>

                                <Col sm={6} xs={9} className='p-0 '>
                                    <p className='bank-policy mb-0 pink-text'>Axis cap fund </p>
                                    <span className='bank-policy-desc lightblack-text'>Invest in SBI & get 7% interest rate </span>
                                </Col>

                                <Col sm={4} className='cards-button '>
                                    <Button className='pink-text bgdark-red text-white'>Explore</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className='bank-cards'>
                        <Container>
                            <Row className="bg-green banks-size">
                                <Col sm={2} xs={3} className='p-0'>
                                    <img src={Tax} className='w-100 bank-iamge' alt="sbi" title="sbi" />
                                </Col>

                                <Col sm={6} xs={9} className='p-0 '>
                                    <p className='bank-policy mb-0 green-text'>Tax saver plan </p>
                                    <span className='bank-policy-desc lightblack-text'>Invest in SBI & get 7% interest rate </span>
                                </Col>

                                <Col sm={4} className='cards-button '>
                                    <Button className='pink-text bg-darkgreen text-white'>Explore</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Fragment >

        );
    }
}

export default Cards;
