import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, NavItem, Nav, NavLink } from 'reactstrap';

import Backarrow from "../../../../assets/images/myaccount/backarrow.svg";
import cmgsson from "../../../../assets/images/myaccount/cmgsson.svg";
import Medal from "../../../../assets/images/myaccount/Medal.svg";
import DownloadSimple from "../../../../assets/images/myaccount/DownloadSimple.svg";
import Receiptservice from "../../../../assets/images/myaccount/Receiptservice.svg";
import FlowArrow from "../../../../assets/images/myaccount/FlowArrow.svg";
import Handshake from "../../../../assets/images/myaccount/Handshake.svg";





class Servicecorner extends Component {
    render() {
        return (
            <Fragment>
                <div className="servicecorner-copmonent">
                    <Container>
                        <Row className=" m-0 back-section">
                            <Col sm={12}>
                                <div className='d-flex'>
                                    <img src={Backarrow} alt="Backarrow" title="Backarrow" className='Backarrow' />
                                    <p className='mb-0'>Service Corner</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className=''>
                            <Col sm={4}>
                                <div className='service-corner-card'>
                                    <Row className='service-borderbtn  '>
                                        <Col sm={9}>
                                            <p className='mb-0 service-corner-title'>Submit Life <br />Certificate</p>
                                        </Col>
                                        <Col sm={3}>
                                            <img src={Medal} alt="Medal" title="Medal" className='' />
                                        </Col>
                                    </Row>
                                    <p className="mb-0 service-corner-data">Submit Life Certificate for your HDFC Life Annuity policies online with our face recognition technology</p>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='service-corner-card'>
                                    <Row className='service-borderbtn  '>
                                        <Col sm={9}>
                                            <p className='mb-0 service-corner-title'>Download Annuity<br /> Statement</p>
                                        </Col>
                                        <Col sm={3}>
                                            <img src={DownloadSimple} alt="DownloadSimple" title="DownloadSimple" className='' />
                                        </Col>
                                    </Row>
                                    <p className="mb-0 service-corner-data">Download policy statement for the Superannuation policies which your company holds with HDFC Life</p>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='service-corner-card'>
                                    <Row className='service-borderbtn  '>
                                        <Col sm={9}>
                                            <p className='mb-0 service-corner-title'>Download SuperAnnuation
                                                Statement</p>
                                        </Col>
                                        <Col sm={3}>
                                            <img src={Receiptservice} alt="Receiptservice" title="Receiptservice" className='' />
                                        </Col>
                                    </Row>
                                    <p className="mb-0 service-corner-data">Download policy statement for the Superannuation policies which your company holds with HDFC Life</p>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='service-corner-card'>
                                    <Row className='service-borderbtn  '>
                                        <Col sm={9}>
                                            <p className='mb-0 service-corner-title'>Migrate NPS account
                                                (ICSS/ISS)</p>
                                        </Col>
                                        <Col sm={3}>
                                            <img src={FlowArrow} alt="FlowArrow" title="FlowArrow" className='' />
                                        </Col>
                                    </Row>
                                    <p className="mb-0 service-corner-data">Submit Life Certificate for your HDFC Life Annuity policies online with our face recognition technology</p>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='service-corner-card'>
                                    <Row className='service-borderbtn  '>
                                        <Col sm={9}>
                                            <p className='mb-0 service-corner-title'>Contribute to <br/>NPS</p>
                                        </Col>
                                        <Col sm={3}>
                                            <img src={Handshake} alt="Handshake" title="Handshake" className='' />
                                        </Col>
                                        <img src={cmgsson} alt="comingsoon" title="cmgsoon" className='service-cmgsoon'/>
                                    </Row>
                                    <p className="mb-0 service-corner-data">Download annuity statements for HDFC Life Annuity policies which are linked here on Life99</p>
                                </div>
                            </Col>

                        </Row>
                    </Container>

                </div>
            </Fragment >

        );
    }
}

export default Servicecorner;
