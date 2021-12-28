import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';



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
const Myaccount = () =>{
    console.log("this is loading")
     const location = useLocation();
        return (
            <Fragment>
                { location.pathname === myAccountPaths.myAccount && <div className="my-account-dashbaord">
                    <Container>
                        <PersonalDetails />
                        <Kycdetail />
                        <Bankdetail/>
                        <Contactdetail />
                        <Nominee/>
                        <Referfriend />
                        <PreapprovedInsurance/>
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
