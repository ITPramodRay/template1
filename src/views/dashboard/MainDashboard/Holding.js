import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Hodingcurve from "../../../assets/images/Main-Dashbaord/holding-curve.png"

class  Holding extends Component {
    render() {
        return (
            <Fragment>
                <div className=" holding-section ">
                    <div className='holding-curve '>
                        <img src={Hodingcurve}></img>
                    </div>
                    <Container>
                        <Row>
                            <p className="title-text text-white"><span className='font-weight-bold'>Hello,</span> Ramesh Nair  </p>
                        </Row>

                        <Row>                   
                            <Col sm={10} className='mx-auto'>
                                <Row>
                                    <Col sm={6} xs={6}>
                                        <div className='holding-amount border-right'>
                                            <p className='holding-text'>Current Holdings</p>
                                            <span className='amount-text'>2 L</span>
                                        </div>
                                    </Col>
                                    <Col sm={6} xs={6}>
                                        <div className='holding-amount current-holding'>
                                            <p className='holding-text'>Current Holdings</p>
                                            <span className='amount-text'>3.90 Cr</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </Fragment >

        );
    }
}

export default Holding;
