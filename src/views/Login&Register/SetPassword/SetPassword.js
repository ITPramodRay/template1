import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Input, Label  } from 'reactstrap';


import Life99Logo from '../../../assets/images/Life99Logo.svg';

const SetPassword = () => {
  
    return (
      <Fragment>
            <Container>
              <Row>
                <Col md={12}>
                  <div className='Logo'><img src={Life99Logo} alt="Life99" title='Life99' /></div>
                </Col>
                <Col md={12}>
                  <div className='signuptitle'>
                    <span>Set Password</span>                    
                  </div>
                </Col>
              </Row>
              <Form className='setpassword'>
                <Row>
                    <Col md={6}>
                      <Label>Enter Password</Label>
                      <Input type="password" name="password" />
                    </Col>
                </Row>
                 <Row>
                   <Col md={6}>
                      <Label>Re-Enter Password</Label>
                      <Input type="password" name="repassword" />
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


export default SetPassword;
