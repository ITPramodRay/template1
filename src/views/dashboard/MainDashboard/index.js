import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
// Files
import Holding from './Holding';
import Retiralscore from './Retiralscore';
import Investing from './investing';
import Healthy from './Healthy';
import Servicecorner from './ServiceCorner';
import Subscribe from './Subscribe';

import Cards from './Cards';
import AppDownloadPC from '../../common/AppDownload/AppDownloadPC';
import Footer from '../../common/Footer/Footer';

class Maindashboard extends Component {
  render() {
    return (
      <>
        <Row className='demo'>
          <div className='main-dashboard'>
            <Row className='p-0 m-0'>
              <Col sm={9} className='p-0'>
                <Holding />
                <div className='main-dashboard container'>
                  <Row className='p-0 m-0'>
                    <Col sm={12} className='p-0'>
                      <Retiralscore />
                      <Investing />
                      <Healthy />
                      <Servicecorner />
                    </Col>
                  </Row>
                  <Row className='m-0'>{/* <Subscribe /> */}</Row>
                </div>
              </Col>
              <Col sm={3} className=' main-dashboard-rightpart'>
                <Cards />
              </Col>
            </Row>
          </div>

        </Row>
        <AppDownloadPC />
        <Footer />
      </>
    );
  }
}

export default Maindashboard;
