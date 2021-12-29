import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import AppDownloadPC from '../../common/AppDownload/AppDownloadPC';

import CardHead from '../../common/CardHead/CardHead';

import InvestCard from './InvestCard';
import InvestLeftPanel from './InvestLeftPanel';


export default function Invest({ ...props }) {
  
  return (
    <>
       <CardHead />
       <div>
        <Container>
          <Row>
            <Col md={9}>
                <InvestCard />
            </Col>
            <Col md={3}>
              <InvestLeftPanel />
            </Col>
          </Row>
        </Container>
        <AppDownloadPC/>
       
       </div>
    </>
  );
}
