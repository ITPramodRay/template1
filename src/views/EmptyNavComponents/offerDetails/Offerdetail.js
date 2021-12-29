import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Doctor from "../../../assets/images/Service/Doctor.svg";
import pharmalogo from "../../../assets/images/Service/pharmalogo.svg";

class Offerdetail extends Component {
    render() {
        return (
            <Fragment>
                <div className="Offerdetail-copmonent">

                    <Row className='m-0'>
                        <Col sm={5} className='ps-0'>
                            <img src={Doctor} alt="doctor" title="dotcor" className='doctor-image w-100' />
                        </Col>
                        <Col sm={7}>
                            <div className='pharma-details'>

                                <img src={pharmalogo} alt="pharmalogo" title="pharmalogo" className='pharmalogo-image' />
                                <p className='flat-text'>Flat 50% Off </p>
                                <p className='col-sm-6 discount-text'>additional Rs 50 cashback on pharmaEasy Gold membership using HDFC Bank Cards</p>
                                <Button className="avail-btn">Avail Now</Button>
                                <Tabs className="pharma-tabs col-sm-8">
                                    <TabList>
                                        <Container>
                                            <Tab>Steps to Redeem </Tab>
                                            <Tab>Terms & Conditions</Tab>

                                        </Container>
                                    </TabList>

                                    <TabPanel >
                                        <ul className='pharma-ul'>
                                            <li>Visit Medibuddy App/ Website</li>
                                            <li>Use the Promocode and HDFC Bank Debit or Credit   Card to avail the benefit</li>
                                            <li>Please click and use HDFC Bank Card for availing the special discount</li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel >
                                        <ul className='pharma-ul'>
                                        <li>Use the Promocode and HDFC Bank Debit or Credit   Card to avail the benefit</li>
                                            <li>Visit Medibuddy App/ Website</li>
                                            <li>Please click and use HDFC Bank Card for availing the special discount</li>
                                        </ul>
                                    </TabPanel>

                                </Tabs>


                            </div>
                        </Col>

                    </Row>


                </div>
            </Fragment >

        );
    }
}

export default Offerdetail;
