import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Input, Label  } from 'reactstrap';


import Life99Logo from '../../../assets/images/Life99Logo.svg';

class SignUp extends Component {
  render() {
    return (
      <Fragment>
            <Container>
              <Row>
                <Col md={12}>
                  <div className='Logo'><img src={Life99Logo} alt="Life99" title='Life99' /></div>
                </Col>
                <Col md={12}>
                  <div className='signuptitle'>
                    <span>Enter OTP</span>
                    <p>OTP has been send to the mobile entered by you</p>
                  </div>
                </Col>
              </Row>
              <Form>
                <Row>
                  <Col md={5}> 
                    <Row>
                      <Col md={3}>                     
                          <Input type="text" name="otp" value=""/>
                      </Col>
                      <Col md={3}>                     
                          <Input type="text" name="otp" value=""/>
                      </Col>
                      <Col md={3}>                     
                          <Input type="text" name="otp" value=""/>
                      </Col>
                      <Col md={3}>                     
                          <Input type="text" name="otp" value=""/>
                      </Col>
                    </Row>
                  </Col>  
                </Row>
                 <Row className='resentotp'>
                    <Col md={4}>
                       <a href='#'>Resent OTP</a>
                    </Col>
                    <Col md={6} className='mr-right'>
                       <p>09:59</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                       <input className='subbtn' type="submit" name="Submit" value="Submit" />
                    </Col>
                </Row>
                
              </Form>
            </Container>
      </Fragment >

    );
  }
}

export default SignUp;
