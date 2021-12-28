import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, NavItem, Nav, NavLink } from 'reactstrap';

import Avtar from "../../../assets/images/myaccount/Avatar.png";
import Pencil from "../../../assets/images/myaccount/Pencil.svg";
import Bank from "../../../assets/images/myaccount/Bank.svg";
import Checks from "../../../assets/images/myaccount/Checks.svg";
import CircleWavyCheck from "../../../assets/images/myaccount/CircleWavyCheck.svg";
import DeviceMobileCamera from "../../../assets/images/myaccount/DeviceMobileCamera.svg";
import IdentificationCard from "../../../assets/images/myaccount/IdentificationCard.svg";
import Pattern from "../../../assets/images/myaccount/pattern.svg";
import Receipt from "../../../assets/images/myaccount/Receipt.svg";
import ShareNetwork from "../../../assets/images/myaccount/ShareNetwork.svg";
import shield from "../../../assets/images/myaccount/shield.svg";
import UserCirclePlus from "../../../assets/images/myaccount/UserCirclePlus.svg";
import UserList from "../../../assets/images/myaccount/UserList.svg";
import whatsapp from "../../../assets/images/myaccount/whatsapp.svg";
import following from "../../../assets/images/myaccount/Following.svg"



class PreapprovedInsurance extends Component {
    render() {
        return (
            <Fragment>
               
                    
                        

                      
                            <div className='myaccount-detail-form preinsurance-details-form'>
                                <div className='myacoount-heeader'>
                                    <Col className='borderbottom'>
                                        <Row className='align-items-center'>
                                            <Col sm={5}>

                                                <div class="">
                                                    <img src={Checks} alt="Checks" title="Checks" className='persone-icon' />
                                                    <p className='myaccount-title'>Preapproved Insurance </p>
                                                </div>
                                            </Col>
                                            <Col className='ms-auto text-right'>
                                                <div class="">
                                                    <img src={whatsapp} alt="whatsapp" title="whatsapp" className='whatsapp-img' />
                                                    <span className='sharelink-text'>Get whatsapp notifications</span>
                                                </div>

                                            </Col>
                                        </Row>
                                    </Col>
                                </div>


                                <Form className='myaccount--main--form preinsurance-main-form'>
                                    <Row>
                                        <Col sm={6} className="" >
                                            <h5 className='insurance-desc'>
                                                You are eligible for the click to protect insurance product
                                            </h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}>
                                            <div className='insurnace-block'>
                                                <div className='insurnace-header'>
                                                    <p className='insurence-bank'>HDFC life insurance</p>
                                                    <span className='insurnece-percentage'>55% covered</span>
                                                </div>
                                                <p className='insurence-data'>Based on your likely income untile retirement, you  need additional Rs. 70 Lac out of Rs 1 cr at peremium of Rs 20,000 per annum</p>
                                                <Button className='insure-btn'>insure now</Button>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className='insurnace-block'>
                                                <div className='insurnace-header'>
                                                    <p className='insurence-bank'>HDFC life insurance</p>
                                                    <span className='insurnece-percentage'>55% covered</span>
                                                </div>
                                                <p className='insurence-data'>Based on your likely income untile retirement, you  need additional Rs. 70 Lac out of Rs 1 cr at peremium of Rs 20,000 per annum</p>
                                                <Button className='insure-btn'>insure now</Button>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className='insurnace-block'>
                                                <div className='insurnace-header'>
                                                    <p className='insurence-bank'>HDFC life insurance</p>
                                                    <span className='insurnece-percentage'>55% covered</span>
                                                </div>
                                                <p className='insurence-data'>Based on your likely income untile retirement, you  need additional Rs. 70 Lac out of Rs 1 cr at peremium of Rs 20,000 per annum</p>
                                                <Button className='insure-btn'>insure now</Button>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className='insurnace-block'>
                                                <div className='insurnace-header'>
                                                    <p className='insurence-bank'>HDFC life insurance</p>
                                                    <span className='insurnece-percentage'>55% covered</span>
                                                </div>
                                                <p className='insurence-data'>Based on your likely income untile retirement, you  need additional Rs. 70 Lac out of Rs 1 cr at peremium of Rs 20,000 per annum</p>
                                                <Button className='insure-btn'>insure now</Button>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className='insurnace-block'>
                                                <div className='insurnace-header'>
                                                    <p className='insurence-bank'>HDFC life insurance</p>
                                                    <span className='insurnece-percentage'>55% covered</span>
                                                </div>
                                                <p className='insurence-data'>Based on your likely income untile retirement, you  need additional Rs. 70 Lac out of Rs 1 cr at peremium of Rs 20,000 per annum</p>
                                                <Button className='insure-btn'>insure now</Button>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className='insurnace-block'>
                                                <div className='insurnace-header'>
                                                    <p className='insurence-bank'>HDFC life insurance</p>
                                                    <span className='insurnece-percentage'>55% covered</span>
                                                </div>
                                                <p className='insurence-data'>Based on your likely income untile retirement, you  need additional Rs. 70 Lac out of Rs 1 cr at peremium of Rs 20,000 per annum</p>
                                                <Button className='insure-btn'>insure now</Button>
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                </Form>
                            </div>
                    
            </Fragment >

        );
    }
}

export default PreapprovedInsurance;
