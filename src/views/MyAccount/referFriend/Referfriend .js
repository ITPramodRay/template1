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



class Referfriend extends Component {
    render() {
        return (
            <Fragment>
                

                   

        
                            <div className='myaccount-detail-form referfriend-details-form'>
                                <div className='myacoount-heeader'>
                                    <Col className='borderbottom'>
                                        <Row className='align-items-center'>
                                            <Col sm={5}>

                                                <div class="">
                                                    <img src={ShareNetwork} alt="ShareNetwork" title="ShareNetwork" className='persone-icon' />
                                                    <p className='myaccount-title'>Refer a Friend </p>
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


                                <Form className='myaccount--main--form referfriend-main-form'>
                                    <Row>
                                        <Col sm={11} className='mx-auto text-center' >
                                            <img src={following} alt="following" title="following" className='friend-image'/>
                                            <p className='referefriend-desc'>Every time your family or friend download the app and invest via life 99 you earn a referral points & avail exciting offers</p>
                                            <Button className='refere-btn'> <img src={whatsapp} alt="whatsapp" title="whatsapp"/>Share via WhatsApp</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                      
                    
            </Fragment >

        );
    }
}

export default Referfriend;
