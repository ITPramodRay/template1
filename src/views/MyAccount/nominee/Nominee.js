import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, NavItem, Nav, NavLink, CustomInput } from 'reactstrap';

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



class Nominee extends Component {
    render() {
        return (
            <Fragment>
                

                    

                       
                            <div className='myaccount-detail-form Nominee-details-form'>
                                <div className='myacoount-heeader'>
                                    <Col className='borderbottom'>
                                        <Row className='align-items-center'>
                                            <Col sm={5}>

                                                <div class="">
                                                    <img src={UserCirclePlus} alt="Nominee" title="Nominee" className='persone-icon' />
                                                    <p className='myaccount-title'> Add Nominee </p>
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


                                <Form className='myaccount--main--form Nominee-main-form'>
                                    <Row>
                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampleSelect">Relationship</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>Spouse</option>
                                                <option>Spouse</option>
                                            </Input>
                                            <img src={CaretDown} alt="CaretDown" title="CaretDown" className='downdown-image' />
                                        </FormGroup>
                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampleEmail">Nominee Name</Label>
                                            <Input type="text" name="text" id="exampletext" placeholder="" />
                                        </FormGroup >
                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampletext">Date of Birth</Label>
                                            <Input type="text" name="text" id="exampletext" placeholder="" />
                                        </FormGroup>

                                        <FormGroup className='col-sm-12 input-div'>
                                            <Label for="exampletext">Date of Birth</Label>
                                            <Input type="text" name="text" id="exampletext" placeholder="" />
                                        </FormGroup>
                                        <FormGroup className='col-sm-12 input-div'>
                                            <Label for="exampleCheckbox">Address</Label>
                                            <div className='d-flex'>
                                                <FormGroup check className='col-sm-6'>
                                                    <Label check>
                                                        <Input type="radio" name="radio2" />
                                                        Field to enter complete adress
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check className='col-sm-6'>
                                                    <Label check>
                                                        <Input type="radio" name="radio2" />
                                                        Same as my address
                                                    </Label>
                                                </FormGroup>

                                            </div>
                                        </FormGroup>

                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampletext">Pincode</Label>
                                            <Input type="text" name="text" id="exampletext" placeholder="" />
                                        </FormGroup>
                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampletext">City</Label>
                                            <Input type="text" name="text" id="exampletext" placeholder="" />
                                        </FormGroup>
                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampleSelect">State</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>Gujrat</option>
                                                <option>Gujrat</option>
                                            </Input>
                                            <img src={CaretDown} alt="CaretDown" title="CaretDown" className='downdown-image' />
                                        </FormGroup>
                                        <FormGroup className='col-sm-6 input-div'>
                                            <Label for="exampleSelect">Country</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>India</option>
                                                <option>India</option>
                                            </Input>
                                            <img src={CaretDown} alt="CaretDown" title="CaretDown" className='downdown-image' />
                                        </FormGroup>
                                        <FormGroup className='col-sm-6 '>
                                            <Button className='myaccount-btn'>Save Details</Button>
                                        </FormGroup>
                                    </Row>
                                </Form>
                            </div>
    
            </Fragment >

        );
    }
}

export default Nominee;
