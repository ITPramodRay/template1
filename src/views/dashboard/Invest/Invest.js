import React from 'react';
import { Container,Row,Col } from 'reactstrap';

import InvestTitle from './InvestTitle';
import InvestCard from './InvestCard';
import InvestLeftPanel from './InvestLeftPanel';


export default function Invest({ ...props }) {
  
  return (
    <>
       <InvestTitle />
       
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
       </div>
    </>
  );
}
