import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



import RetiralAdvisor from '../../../assets/images/Retiral-Advisor.svg';
import Medicinesoffers from '../../../assets/images/Medicines-offers.svg';
import WillPlanning from '../../../assets/images/Will-Planning.svg';
import TaxServices from '../../../assets/images/Tax-Services.svg';
import Lifecommunity from '../../../assets/images/Life-community.svg';
import Doctorconsultant from '../../../assets/images/Doctor-consultant.svg';


class ServicesMobile extends Component {
    render() {
        const responsive = {
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
                slidesToSlide: 1
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1
            }
        };
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
                            <Col className="Service-mobile-slider">
                                <Carousel
                                    additionalTransfrom={0}
                                    arrows={false}
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
                                    showDots={true}
                                    sliderClass=""
                                    slidesToSlide={1}
                                    swipeable
                                    responsive={responsive}
                                >

                                    <div className="slider-block">

                                        <Row className="">
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <div className='services-detail'>
                                                    <Row className='align-items-center'>
                                                        <Col sm={4}>
                                                            <img src={RetiralAdvisor} className='w-100' alt="services" title="services" />
                                                        </Col>
                                                        <Col sm={8}>
                                                            <p className='services-title'>Retiral Advisor</p>
                                                            <span className='services-description'>Stay between one and 12+ months with the ability to transfer to other homes in the Landing network.</span>
                                                            <Link to="#" className='services-link'>Explore now</Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>

                                    <div className="slider-block">

                                        <Row className="">
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <div className='services-detail'>
                                                    <Row className='align-items-center'>
                                                        <Col sm={4}>
                                                            <img src={TaxServices} className='w-100' alt="services" title="services" />
                                                        </Col>
                                                        <Col sm={8}>
                                                            <p className='services-title'>Tax Service</p>
                                                            <span className='services-description'>Stay between one and 12+ months with the ability to transfer to other homes in the Landing network.</span>
                                                            <Link to="#" className='services-link'>Explore now</Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>

                                    <div className="slider-block">

                                        <Row className="">
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <div className='services-detail'>
                                                    <Row className='align-items-center'>
                                                        <Col sm={4}>
                                                            <img src={Medicinesoffers} className='w-100' alt="services" title="services" />
                                                        </Col>
                                                        <Col sm={8}>
                                                            <p className='services-title'>Medicines offers</p>
                                                            <span className='services-description'>Stay between one and 12+ months with the ability to transfer to other homes in the Landing network.</span>
                                                            <Link to="#" className='services-link'>Explore now</Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>

                                    <div className="slider-block">

                                        <Row className="">
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <div className='services-detail'>
                                                    <Row className='align-items-center'>
                                                        <Col sm={4}>
                                                            <img src={Lifecommunity} className='w-100' alt="services" title="services" />
                                                        </Col>
                                                        <Col sm={8}>
                                                            <p className='services-title'>Life99 community</p>
                                                            <span className='services-description'>Stay between one and 12+ months with the ability to transfer to other homes in the Landing network.</span>
                                                            <Link to="#" className='services-link'>Explore now</Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>

                                    <div className="slider-block">

                                        <Row className="">
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <div className='services-detail'>
                                                    <Row className='align-items-center'>
                                                        <Col sm={4}>
                                                            <img src={WillPlanning} className='w-100' alt="services" title="services" />
                                                        </Col>
                                                        <Col sm={8}>
                                                            <p className='services-title'>Will Planning</p>
                                                            <span className='services-description'>Stay between one and 12+ months with the ability to transfer to other homes in the Landing network.</span>
                                                            <Link to="#" className='services-link'>Explore now</Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>

                                    <div className="slider-block">

                                        <Row className="">
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                                <div className='services-detail'>
                                                    <Row className='align-items-center'>
                                                        <Col sm={4}>
                                                            <img src={Doctorconsultant} className='w-100' alt="services" title="services" />
                                                        </Col>
                                                        <Col sm={8}>
                                                            <p className='services-title'>Doctor consultant</p>
                                                            <span className='services-description'>Stay between one and 12+ months with the ability to transfer to other homes in the Landing network.</span>
                                                            <Link to="#" className='services-link'>Explore now</Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>

                                </Carousel>

                            </Col>

                        </Row>
                    </Container>
                </div>
            </Fragment >
        );
    }
}

export default ServicesMobile;
