import React from 'react';
import CardHead from './CardHead/CardHead';
import HealthGoals from './HealthGoals/HealthGoals';

export default function WellBeing({ ...props }) {
  
  return (
    <>
        <CardHead/>
        <div className='base_card_We'>
          <HealthGoals />
        </div>
    </>
  );
}
