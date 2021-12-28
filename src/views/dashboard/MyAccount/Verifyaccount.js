import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, NavItem, Nav, NavLink } from 'reactstrap';

import Email from "../../../assets/images/Email.svg";



class Verifyaccount extends Component {
    render() {
        return (
            <Fragment>
                <div className="Verify-account-component">

                    <Row className="m-0">
                        <Col sm={6} className='mx-auto text-center text-white' >
                            <img src={Email} alt="email" title="email" className='' />
                            <p className='verifyemial-text pt-5 pb-3'> Verify Email ID</p>
                            <p>We have sent verification link to <a className='text-white' href="mailto:sushil@hdfclife.com">sushil@hdfclife.com.</a></p>

                            <p className='pb-3'>Please click on the verification link received in the email to verify
                            your email address.</p>

                            <p className='mb-0'>If you didn't receive the mail.</p>
                            <p><a href="#" className='text-white'>Click Here</a> to resend the mail</p>

                            <Button className='backprofile-btn'>Back to Profile</Button>
                        </Col>


                    </Row>


                </div>
            </Fragment >

        );
    }
}

export default Verifyaccount;
