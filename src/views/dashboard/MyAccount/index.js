import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';



// Files 
import PersonalDetails from "./Personaldetails";
import Kycdetail from "./KycDetail";
import Bankdetail from "./Bankdetail";
import Contactdetail from "./Contactdetail";
import Nominee from "./Nominee";
import Referfriend from './Referfriend ';
import PreapprovedInsurance from './PreapprovedInsurance';

import Subscribe from "../MainDashboard/Subscribe";

import Verifyaccount from './Verifyaccount';
import Servicecorner from './Servicecorner';
import Calculators from './Calculators';
import Offerdetail from '../Offerdetail';

class Myaccount extends Component {
    render() {
        return (
            <Fragment>
                <div className="my-account-dashbaord">
                    <Container>
                        <PersonalDetails />
                        <Kycdetail />
                        <Bankdetail/>
                        <Contactdetail />
                        <Nominee/>
                        <Referfriend />
                        <PreapprovedInsurance/>
                    </Container>
                </div> 
                {/* add differtent rout screen */}
                <Verifyaccount />
                <Servicecorner />
                <Calculators />
                <Offerdetail />
            </Fragment >

        );
    }
}

export default Myaccount;
