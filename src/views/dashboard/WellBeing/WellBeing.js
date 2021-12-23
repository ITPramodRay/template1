import React from 'react';

import CardHead from './CardHead/CardHead';
import ExclusiveFeatures from './ExclusiveFeatures/ExclusiveFeatures';
import HealthArticles from './HealthArticles/HealthArticles';
import HealthGoals from './HealthGoals/HealthGoals';
import HealthScore from './HealthScore/HealthScore';
import HealthServices from './HealthServices/HealthServices';
import PhysicalWellbeing from './PhysicalWellbeing/PhysicalWellbeing';

export default function WellBeing({ ...props }) {
  
  return (
    <>
      
        <CardHead/>
        <div className='base_card_We'>
          <HealthGoals />
          <HealthServices />
          <HealthArticles />
          <HealthScore />
          <ExclusiveFeatures />
          <PhysicalWellbeing />
        </div>
    </>
  );
}
