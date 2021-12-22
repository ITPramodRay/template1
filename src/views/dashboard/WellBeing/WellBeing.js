import React from 'react';
import CardHead from './CardHead/CardHead';
import HealthArticles from './HealthArticles/HealthArticles';
import HealthGoals from './HealthGoals/HealthGoals';
import HealthServices from './HealthServices/HealthServices';

export default function WellBeing({ ...props }) {
  
  return (
    <>
        <CardHead/>
        <div className='base_card_We'>
          <HealthGoals />
          <HealthServices />
          <HealthArticles />
        </div>
    </>
  );
}
