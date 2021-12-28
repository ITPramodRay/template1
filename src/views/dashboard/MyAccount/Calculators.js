import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, NavItem, Nav, NavLink } from 'reactstrap';

import Backarrow from "../../../assets/images/myaccount/backarrow.svg";
import epf from "../../../assets/images/calculator/epf.svg";
import nps from "../../../assets/images/calculator/nps.svg";
import retire from "../../../assets/images/calculator/retire.svg";


class Calculators extends Component {
    render() {
        return (
            <Fragment>
                <div className="Calculator-copmonent">
                    <Container>
                        <Row className=" m-0 back-section">
                            <Col sm={12}>
                                <div className='d-flex'>
                                    <img src={Backarrow} alt="Backarrow" title="Backarrow" className='Backarrow' />
                                    <p className='mb-0'>Calculators</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className=''>
                            <Col sm={4}>
                                <div className='calculator-card'>
                                    <p className='mb-0 calculator-title'>EPF Calculator</p>
                                    <p className="mb-0 calculator-data">Calculate returns for your Employee’s Provident Fund (EPF)</p>
                                    <img src={epf} alt="epf" title="epf" className='calulator-image' />
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='calculator-card'>
                                    <p className='mb-0 calculator-title'>PPF Calculator</p>
                                    <p className="mb-0 calculator-data">Calculate your returns on Public Provident Fund (PPF)</p>
                                    <img src={retire} alt="retire" title="retire" className='calulator-image' />
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='calculator-card'>
                                    <p className='mb-0 calculator-title'>NPS Calculator</p>
                                    <p className="mb-0 calculator-data">Calculate your returns on Public Provident Fund (PPF)</p>
                                    <img src={nps} alt="nps" title="nps" className='calulator-image' />
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='calculator-card'>
                                    <p className='mb-0 calculator-title'>Retire calculator</p>
                                    <p className="mb-0 calculator-data">Calculate your returns on Public Provident Fund (PPF)</p>
                                    <img src={nps} alt="nps" title="nps" className='calulator-image' />
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='calculator-card'>
                                    <p className='mb-0 calculator-title'>Income Calculator</p>
                                    <p className="mb-0 calculator-data">Calculate your returns on Public Provident Fund (PPF)</p>
                                    <img src={nps} alt="nps" title="nps" className='calulator-image' />
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='calculator-card'>
                                    <p className='mb-0 calculator-title'>SIP Calculator</p>
                                    <p className="mb-0 calculator-data">Calculate your returns on Public Provident Fund (PPF)</p>
                                    <img src={nps} alt="nps" title="nps" className='calulator-image' />
                                </div>
                            </Col>

                        </Row>
                    </Container>

                </div>
            </Fragment >

        );
    }
}

export default Calculators;
