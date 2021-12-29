import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, NavItem, Nav, NavLink } from 'reactstrap';

import Avtar from "../../../assets/images/myaccount/Avatar.png";
import Pencil from "../../../assets/images/myaccount/Pencil.svg";
import Bank from "../../../assets/images/myaccount/Bank.svg";
import CaretDown from "../../../assets/images/myaccount/CaretDown.svg";
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



class Personaldetails extends Component {
    render() {
        return (
            <>
                        
                            <div className='myaccount-detail-form bank-details-form'>
                                <div className='myacoount-heeader'>
                                    <Col className='borderbottom'>
                                        <Row className='align-items-center'>
                                            <Col sm={5}>

                                                <div class="">
                                                    <img src={Bank} alt="Bank" title="Bank" className='persone-icon' />
                                                    <p className='myaccount-title'>Bank Details</p>
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


                                <Form className='myaccount--main--form bank-main-form'>
                                    <Row>
                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampleEmail">IFSC code</Label>
                                            <Input type="text" name="text" id="exampletext" placeholder="" />
                                        </FormGroup >
                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampletext">Account Number</Label>
                                            <Input type="text" name="text" id="exampletext" placeholder="" />
                                        </FormGroup>
                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampletext">Confirm Account Number</Label>
                                            <Input type="text" name="text" id="exampletext" placeholder="" />
                                        </FormGroup>
                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampleSelect">Account type</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>Savings</option>
                                                <option>Salaried</option>
                                            </Input>
                                            <img src={CaretDown} alt="CaretDown" title="CaretDown" className='downdown-image' />
                                        </FormGroup>
                                        
                                        <FormGroup className='col-sm-6 '>
                                            <Button className='myaccount-btn'>Save Details</Button>
                                        </FormGroup>
                                    </Row>
                                </Form>
                            </div>
                        
                        </>
                    


        );
    }
}

export default Personaldetails;
