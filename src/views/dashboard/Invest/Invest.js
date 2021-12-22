import React from 'react';
import { Container,Row,Col } from 'reactstrap';

import InvestTitle from './InvestHeader/InvestTitle';
import InvestCard from './InvestHeader/InvestCard';
import InvestLeftPanel from './InvestHeader/InvestLeftPanel';


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
