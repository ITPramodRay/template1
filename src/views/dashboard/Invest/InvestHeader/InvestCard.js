import React from 'react';
import { Row, Col } from 'reactstrap';

import Npslogo from '../../../../assets/images/InvestDashboard/ChartLine.svg';
import Comingsoon from "../../../../assets/images/comingsoon.svg";

const  InvestCard = () => {
  
  return (
    <>
        <div className='investcardmain'>
          <Row>
            <Col md={4}>
              <div className='investcardbox'>
                <img src={Npslogo} alt="NPS" title="NPS" />
                <a href='#'>Buy Now</a>
                <span>NPS</span>
                <p>Get started smart investment in NPS</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='investcardbox'>
                <img src={Npslogo} alt="NPS" title="NPS" />
                <a href='#'>Buy Now</a>
                <span>NPS</span>
                <p>Get started smart investment in NPS</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='investcardbox'>
                <img src={Npslogo} alt="NPS" title="NPS" />
                <a href='#'>Buy Now</a>
                <span>NPS</span>
                <p>Get started smart investment in NPS</p>
              </div>
            </Col>
         
            <Col md={4}>
              <div className='investcardbox'>
                <img src={Npslogo} alt="NPS" title="NPS" />
                <a href='#'>Buy Now</a>
                <span>NPS</span>
                <p>Get started smart investment in NPS</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='investcardbox'>
                <img src={Npslogo} alt="NPS" title="NPS" />
                <img className='comingsoon' src={Comingsoon} alt="Comingsoon" title="Comingsoon" />
                <span>NPS</span>
                <p>Get started smart investment in NPS</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='investcardbox'>
                <img src={Npslogo} alt="NPS" title="NPS" />
                <img className='comingsoon' src={Comingsoon} alt="Comingsoon" title="Comingsoon" />
                <span>NPS</span>
                <p>Get started smart investment in NPS</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='investcardbox'>
                <img src={Npslogo} alt="NPS" title="NPS" />
                <img className='comingsoon' src={Comingsoon} alt="Comingsoon" title="Comingsoon" />
                <span>NPS</span>
                <p>Get started smart investment in NPS</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='investcardbox'>
                <img src={Npslogo} alt="NPS" title="NPS" />
                <img className='comingsoon' src={Comingsoon} alt="Comingsoon" title="Comingsoon" />
                <span>NPS</span>
                <p>Get started smart investment in NPS</p>
              </div>
            </Col>
          </Row>
        </div>
    </>
  );
}
export default InvestCard;
