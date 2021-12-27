import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AppDownloadPC from '../common/AppDownload/AppDownloadPC';
import CardHead from '../common/CardHead/CardHead';
import Footer from '../common/Footer/Footer';
import InvestLeftPanel from '../dashboard/Invest/InvestLeftPanel';
import GoalPlannerCard from './GoalPlannerCard';
import SelectGoal from './SelectGoal';

const Plan = () => {
  return (
    <>
      <CardHead />
      <div className='container desktopView bg-plan'>
        <div className='row'>
          <div className='col-9'>
            <GoalPlannerCard />
            <SelectGoal/>
          </div>
          <div className='col-3'>
            <InvestLeftPanel />
          </div>
        </div>
      </div>
      <AppDownloadPC />
      <div className='desktopView'>
        <Footer />
      </div>
      
      
      <div className='base_card_We Plan_mv'>
        <GoalPlannerCard />
        <SelectGoal/>
      </div>
      <div className='mobileView'>
        <Footer />
      </div>
    </>
  );
};
export default Plan;
