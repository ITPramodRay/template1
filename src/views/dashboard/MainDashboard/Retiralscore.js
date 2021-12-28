import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


class Retiralscore extends Component {
    render() {
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
                slidesToSlide: 1
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1
            }
        };
        return (
            <Fragment>
                <div className=" retiralscrore-section">
                    <Container>
                        <Col sm={12} className='mx-auto retiral-slider-block shadow bg-white '>

                            <p className='add-investment mb-0'>Add investments</p>

                            <Row>
                                <Container>
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


                                        <div className='retiral-slider'>
                                            <Row className='align-items-center'>
                                                <Col sm={3} className='discount-border'>
                                                    <p className='retiral-text mb-0'>retiral score </p>
                                                    <span className='retiral-discount'>50%</span>
                                                </Col>
                                                <Col sm={6}>
                                                    <p className='retriral-discount-desc'>The Retiral score is bases<br /> your age & salary Click To Get<br /> updated retiral score  </p>
                                                </Col>
                                                <Col sm={3} className='discount-calulate-btn'>
                                                    <Button>Calculate Now</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='retiral-slider'>
                                            <Row className='align-items-center'>
                                                <Col sm={3} className='discount-border'>
                                                    <p className='retiral-text mb-0'>retiral score </p>
                                                    <span className='retiral-discount'>50%</span>
                                                </Col>
                                                <Col sm={6}>
                                                    <p className='retriral-discount-desc'>The Retiral score is bases<br /> your age & salary Click To Get<br /> updated retiral score  </p>
                                                </Col>
                                                <Col sm={3} className='discount-calulate-btn'>
                                                    <Button>Calculate Now</Button>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className='retiral-slider'>
                                            <Row className='align-items-center'>
                                                <Col sm={3} className='discount-border'>
                                                    <p className='retiral-text mb-0'>retiral score </p>
                                                    <span className='retiral-discount'>50%</span>
                                                </Col>
                                                <Col sm={6}>
                                                    <p className='retriral-discount-desc'>The Retiral score is bases<br /> your age & salary Click To Get<br /> updated retiral score  </p>
                                                </Col>
                                                <Col sm={3} className='discount-calulate-btn'>
                                                    <Button>Calculate Now</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='retiral-slider'>
                                            <Row className='align-items-center'>
                                                <Col sm={3} className='discount-border'>
                                                    <p className='retiral-text mb-0'>retiral score </p>
                                                    <span className='retiral-discount'>50%</span>
                                                </Col>
                                                <Col sm={6}>
                                                    <p className='retriral-discount-desc'>The Retiral score is bases<br /> your age & salary Click To Get<br /> updated retiral score  </p>
                                                </Col>
                                                <Col sm={3} className='discount-calulate-btn'>
                                                    <Button>Calculate Now</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Carousel>
                                </Container>
                            </Row>
                        </Col>


                    </Container>
                </div>
            </Fragment >

        );
    }
}

export default Retiralscore;
