import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom'


import RetiralAdvisor from '../../images/Retiral-Advisor.svg';
import Medicinesoffers from '../../images/Medicines-offers.svg';
import WillPlanning from '../../images/Will-Planning.svg';
import TaxServices from '../../images/Tax-Services.svg';
import Lifecommunity from '../../images/Life-community.svg';
import Doctorconsultant from '../../images/Doctor-consultant.svg';


class Services extends Component {
    render() {
        return (
            <Fragment>
                <div className="section services-section">
                    <Container>
                        <Row className="title-row align-items-center">
                            <Col sm={12}>
                                <h3 className="title-text">Choose the services</h3>
                            </Col>
                        </Row>

                        <Row className="align-items-center">
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className='services-detail'>
                                    <Row className='align-items-center'>
                                        <Col sm={4}>
                                            <img src={RetiralAdvisor} className='w-100' alt="services" title="services" />
                                        </Col>
                                        <Col sm={8}>
                                            <p className='services-title'>Retiral Advisor</p>
                                            <span className='services-description'>Stay between one and 12+ months<br /> with the ability to transfer to other<br /> homes in the Landing network.</span>
                                            <Link to="#" className='services-link'>Explore now</Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className='services-detail'>
                                    <Row className='align-items-center'>
                                        <Col sm={4}>
                                            <img src={TaxServices} className='w-100' alt="services" title="services" />
                                        </Col>
                                        <Col sm={8}>
                                            <p className='services-title'>Tax Service</p>
                                            <span className='services-description'>Stay between one and 12+ months<br /> with the ability to transfer to other<br /> homes in the Landing network.</span>
                                            <Link to="#" className='services-link'>Explore now</Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className='services-detail'>
                                    <Row className='align-items-center'>
                                        <Col sm={4}>
                                            <img src={Medicinesoffers} className='w-100' alt="services" title="services" />
                                        </Col>
                                        <Col sm={8}>
                                            <p className='services-title'>Medicines offers</p>
                                            <span className='services-description'>Stay between one and 12+ months<br /> with the ability to transfer to other<br /> homes in the Landing network.</span>
                                            <Link to="#" className='services-link'>Explore now</Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className='services-detail'>
                                    <Row className='align-items-center'>
                                        <Col sm={4}>
                                            <img src={Lifecommunity} className='w-100' alt="services" title="services" />
                                        </Col>
                                        <Col sm={8}>
                                            <p className='services-title'>Life99 community</p>
                                            <span className='services-description'>Stay between one and 12+ months<br /> with the ability to transfer to other<br /> homes in the Landing network.</span>
                                            <Link to="#" className='services-link'>Explore now</Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className='services-detail'>
                                    <Row className='align-items-center'>
                                        <Col sm={4}>
                                            <img src={WillPlanning} className='w-100' alt="services" title="services" />
                                        </Col>
                                        <Col sm={8}>
                                            <p className='services-title'>Will Planning</p>
                                            <span className='services-description'>Stay between one and 12+ months<br /> with the ability to transfer to other<br /> homes in the Landing network.</span>
                                            <Link to="#" className='services-link'>Explore now</Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div className='services-detail'>
                                    <Row className='align-items-center'>
                                        <Col sm={4}>
                                            <img src={Doctorconsultant} className='w-100' alt="services" title="services" />
                                        </Col>
                                        <Col sm={8}>
                                            <p className='services-title'>Doctor consultant</p>
                                            <span className='services-description'>Stay between one and 12+ months<br /> with the ability to transfer to other<br /> homes in the Landing network.</span>
                                            <Link to="#" className='services-link'>Explore now</Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </Fragment >
        );
    }
}

export default Services;
