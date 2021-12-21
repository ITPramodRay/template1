import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';


import Life99Logo from '../../assets/images/Life99Logo.svg';
import Loadingmed from '../../assets/images/Loadingmed.png';

class SignUp extends Component {
  render() {
    return (
      <Fragment>
          <div className='loadingbg'>
            <Container>
                <Row>
                  <Col md={12}>
                    <div className='Logo'><img src={Life99Logo} alt="Life99" title='Life99' /></div>
                  </Col>  
                </Row>

                <Row>
                  <Col md={12}>
                    <div className='medialbox'>
                      <img src={Loadingmed} alt='Loading' title='Loading' />
                      <span>Based on your given information we are creating summary report</span>
                      <a href='#'>Please give a sec...</a>
                    </div>
                  </Col>  
                </Row>
            </Container>
          </div>  
      </Fragment >

    );
  }
}

export default SignUp;
