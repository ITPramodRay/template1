import React, { } from 'react';
import { Container, Row, Col, Form, Input  } from 'reactstrap';

import Life99Logo from '../../../assets/images/Life99Logo.svg';
import OtpInput from 'react-otp-input';

const VerifyOtp = ({verifyOtp,setOtp,otp}) => {

    return (
      <>
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
                  
                <OtpInput
                    className='otpInput'
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    
                  />

                  {/* <Col md={5}> 
                    <Row>
                      <Col md={3}>                     
                          <Input type="text" name="otp" onChange={(e)=>setOtp(prevState=>({...prevState,digit1:e.target.value}))} />
                      </Col>
                      <Col md={3}>                     
                          <Input type="text" name="otp" onChange={(e)=>setOtp(prevState=>({...prevState,digit2:e.target.value}))} />
                      </Col>
                      <Col md={3}>                     
                          <Input type="text" name="otp" onChange={(e)=>setOtp(prevState=>({...prevState,digit3:e.target.value}))} />
                      </Col>
                      <Col md={3}>                     
                          <Input type="text" name="otp" onChange={(e)=>setOtp(prevState=>({...prevState,digit4:e.target.value}))} />
                      </Col>
                    </Row>
                  </Col>   */}
                  
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
                       <input className='subbtn' type="submit" name="Submit" onClick={verifyOtp}/>
                    </Col>
                </Row>
                
              </Form>
            </Container>
      </ >

    );
  }


export default VerifyOtp;
