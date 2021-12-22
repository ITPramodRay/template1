import React from 'react';
import { Row, Col } from 'reactstrap';

import Investlefttop from '../../../assets/images/InvestDashboard/Investlefttop.svg';
import investleftbottom from '../../../assets/images/InvestDashboard/investleftbottom.svg';

const  InvestLeftPanel = () => {
  
  return (
    <>
        <div className='investleftpanel'>
            <div className='investcardinner'>
                <img className='img-fluid topimg' src={Investlefttop} alt="" />
                <ul className='investleftlist'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscingLrem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                </ul>
                <img className='img-fluid' src={investleftbottom} alt="" />
            </div>
        </div>
    </>
  );
}
export default InvestLeftPanel;
