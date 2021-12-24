import React from 'react';
import AppDownload from '../../common/AppDownload/AppDownload';
import Footer from '../../common/Footer/Footer';

import CardHead from './CardHead/CardHead';
import EmotionalMentalWellbeing from './EmotionalMentalWellbeing/EmotionalMentalWellbeing';
import ExclusiveFeatures from './ExclusiveFeatures/ExclusiveFeatures';
import HealthArticles from './HealthArticles/HealthArticles';
import HealthGoals from './HealthGoals/HealthGoals';
import HealthScore from './HealthScore/HealthScore';
import HealthServices from './HealthServices/HealthServices';
import Others from './Others/Others';
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
          <EmotionalMentalWellbeing />
          <Others />
        </div>
        <AppDownload />
        <Footer/>
    </>
  );
}
