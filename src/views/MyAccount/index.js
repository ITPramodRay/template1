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
import { myProfilePaths } from '../../utils/RoutingConstants';
import {useLocation} from "react-router-dom"
import SideBar from './sideBar/sideBar';
const Myaccount = () =>{
     const location = useLocation();
    console.log(location.pathname,"this is loading")

        return (
            <Fragment>
                <div className="my-account-dashbaord">
                    <Container>
                    <div className="myaccount-component  Personal-details-component">
                    <Row className="">
                        <SideBar />
                        <Col sm={8} >
                    { location.pathname === myProfilePaths.myProfile && <PersonalDetails />}
                    { location.pathname === myProfilePaths.kycDetails && <Kycdetail />}
                    { location.pathname === myProfilePaths.bankDetails && <Bankdetail />}
                    { location.pathname === myProfilePaths.contactDetails && <Contactdetail />}
                    { location.pathname === myProfilePaths.nominee && <Nominee />}
                    { location.pathname === myProfilePaths.referFriend && <Referfriend />}
                    { location.pathname === myProfilePaths.preApprovedInsurance && <PreapprovedInsurance />}
                            </Col>
                    </Row>
                        </div>
                        </Container>
                </div> 
                {/* add differtent rout screen */}
                { location.pathname === myProfilePaths.verifyAccount && <Verifyaccount />}
                { location.pathname === myProfilePaths.serviceCorner && <Servicecorner />}
                { location.pathname === myProfilePaths.calculator && <Calculators />}
                { location.pathname === myProfilePaths.offerDetails && <Offerdetail />}

            </Fragment >

        );
    
}

export default Myaccount;
