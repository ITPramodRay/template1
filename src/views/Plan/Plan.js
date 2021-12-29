import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AppDownloadPC from '../common/AppDownload/AppDownloadPC';
import CardHead from '../common/CardHead/CardHead';

import InvestLeftPanel from '../dashboard/Invest/InvestLeftPanel';
import ExploreFetures from './ExploreFetures';
import GoalPlannerCard from './GoalPlannerCard';
import SelectGoal from './SelectGoal';
import TermFuturePlanning from './TermFuturePlanning';

const Plan = () => {
  return (
    <>
      <CardHead />
      <div className='container desktopView bg-plan'>
        <div className='row'>
          <div className='col-9'>
            <GoalPlannerCard />
            <SelectGoal/>
            <ExploreFetures />
            <TermFuturePlanning />
          </div>
          <div className='col-3'>
            <InvestLeftPanel />
          </div>
        </div>
      </div>
      <AppDownloadPC />
      <div className='desktopView'>
       
      </div>
      
      
      <div className='base_card_We Plan_mv'>
        <GoalPlannerCard />
        <SelectGoal/>
        <ExploreFetures />
        <TermFuturePlanning />
      </div>
      <div className='mobileView'>
       
      </div>
    </>
  );
};
export default Plan;
