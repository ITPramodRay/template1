import React from 'react';

const GoalPlannerCard = () => {
  return (
    <>
      <div className='GoalPlanner desktopView'>
        <h2>Goal Planner</h2>
        <p>
          Plan ahead of you time to you can meet your dream at you retirment{' '}
        </p>
        <button className='plangoalbtn'>Plan your goal</button>
      </div>

        {/* mobileview */}
      <div className='mobileView GoalPlannerMV'>
        <h2>Goal Planner</h2>
        <p>
        Plan ahead of you time to you can meet your dream at you retirment 
        </p>
        <button className='plangoalbtn'>Plan your goal</button>
      </div>
    </>
  );
};
export default GoalPlannerCard;
