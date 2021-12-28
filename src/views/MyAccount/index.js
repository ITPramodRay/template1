import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, NavItem, Nav, NavLink } from 'reactstrap';

// Files 
import PersonalDetails from "./personalDetails/Personaldetails";
import Kycdetail from "./kycDetail/KycDetail";
import Bankdetail from "./bankDetail/Bankdetail";
import Contactdetail from "./contactDetail/Contactdetail";
import Nominee from "./nominee/Nominee";
import Referfriend from './referFriend/Referfriend ';
import PreapprovedInsurance from './preApprovedInsurance/PreapprovedInsurance';

import Subscribe from "../dashboard/MainDashboard/Subscribe";

import Verifyaccount from './verifyAccount/Verifyaccount';
import Servicecorner from './serviceCorner/Servicecorner';
import Calculators from './calculator/Calculators';
import Offerdetail from '../dashboard/Offerdetail';
import { myAccountPaths } from '../../utils/RoutingConstants';
import {useLocation} from "react-router-dom"

import Avtar from "../../assets/images/myaccount/Avatar.png";
import Pencil from "../../assets/images/myaccount/Pencil.svg";
import Bank from "../../assets/images/myaccount/Bank.svg";
import CaretDown from "../../assets/images/myaccount/CaretDown.svg";
import Checks from "../../assets/images/myaccount/Checks.svg";
import CircleWavyCheck from "../../assets/images/myaccount/CircleWavyCheck.svg";
import DeviceMobileCamera from "../../assets/images/myaccount/DeviceMobileCamera.svg";
import IdentificationCard from "../../assets/images/myaccount/IdentificationCard.svg";
import Pattern from "../../assets/images/myaccount/pattern.svg";
import Receipt from "../../assets/images/myaccount/Receipt.svg";
import ShareNetwork from "../../assets/images/myaccount/ShareNetwork.svg";
import shield from "../../assets/images/myaccount/shield.svg";
import UserCirclePlus from "../../assets/images/myaccount/UserCirclePlus.svg";
import UserList from "../../assets/images/myaccount/UserList.svg";
import whatsapp from "../../assets/images/myaccount/whatsapp.svg";
const Myaccount = () =>{
    console.log("this is loading")
     const location = useLocation();
        return (
            <Fragment>
                { location.pathname === myAccountPaths.myAccount && <div className="my-account-dashbaord">
                    <Container>
                    <div className="myaccount-component  Personal-details-component">
                    <Row className="">
                    <Col sm={4} >
                            <div className='persone-card'>
                                <Row className="align-items-center">
                                    <img src={Pattern} alt="Pattern" title="Pattern" className=' person-pattern-img' />
                                    <Col sm={4}>
                                        <div className='person-edit-block'>
                                            <img src={Avtar} alt="Person" title="Person" className='w-100' />
                                            <div className='persone-edit'>
                                                <Button className='person-edit-btn'><img src={Pencil} alt="Pencil" title="Pencil" /></Button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={8}>
                                        <p className='person-name mb-0'>Ramesh Nair</p>
                                        <span className='persone-job'>Engineer at BB Agency</span>
                                    </Col>
                                </Row>
                                <Row className="align-items-center pt-3">
                                    <Col sm={6}>
                                        <p className='signed-text mb-0'>Signed in as</p>
                                        <span className='signed-persone'>Ramesh Nair</span>
                                    </Col>
                                    <Col sm={6}>
                                        <Button className='logout-btn'>Logout</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className='corporate-card'>
                                <Row className='align-items-center'>
                                    <Col sm={2}>
                                        <img src={shield} alt="shield" title="shield" className='w-100' />
                                    </Col>
                                    <Col sm={6}>
                                        <p className='link-text mb-0'>Link Corporate Account</p>
                                    </Col>
                                    <Col sm={4} className='p-0'>
                                        <Button className='link-now-btn'>Link Now</Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className='myaccount-menus-card'>
                                <Nav className="myaccountmenu-list" navbar>
                                    <NavItem>
                                        <NavLink href="/" className='active'>
                                            <img src={IdentificationCard} alt="IdentificationCard" title="IdentificationCard" />
                                            Personal Details
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">
                                            <img src={CircleWavyCheck} alt="CircleWavyCheck" title="CircleWavyCheck" />
                                            KYC Details
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">
                                            <img src={Bank} alt="Bank" title="Bank" />
                                            Bank Details
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">
                                            <img src={DeviceMobileCamera} alt="DeviceMobileCamera" title="DeviceMobileCamera" />
                                            Contact Details
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">
                                            <img src={UserCirclePlus} alt="UserCirclePlus" title="UserCirclePlus" />
                                            Add Nominee
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">
                                            <img src={UserList} alt="UserList" title="UserList" />
                                            Corporate Details
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">
                                            <img src={Receipt} alt="Receipt" title="Receipt" />
                                            Transcation
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">
                                            <img src={ShareNetwork} alt="ShareNetwork" title="ShareNetwork" />
                                            Refer a Friend
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/">
                                            <img src={Checks} alt="Checks" title="Checks" />
                                            Preapproved Insurance
                                        </NavLink>
                                    </NavItem>

                                </Nav>
                            </div>
                        </Col>
                        <Col sm={8} >
                        <PersonalDetails />
                        <Kycdetail />
                        <Bankdetail/>
                        <Contactdetail />
                        <Nominee/>
                        <Referfriend />
                        <PreapprovedInsurance/>
                            </Col>
                    </Row>
                        </div>
                        </Container>
                </div> }
                {/* add differtent rout screen */}
                { location.pathname === myAccountPaths.verifyAccount && <Verifyaccount />}
                { location.pathname === myAccountPaths.serviceCorner && <Servicecorner />}
                { location.pathname === myAccountPaths.calculator && <Calculators />}
                { location.pathname === myAccountPaths.offerDetails && <Offerdetail />}

            </Fragment >

        );
    
}

export default Myaccount;
