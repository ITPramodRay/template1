import React from 'react';

const HealthScore = () => {
  return (
    <>
      <div className='row pchealthgoals_pc'>
        <p className='title'>Update your health score</p>
        <div className='col-md-12 col-sm-6 healthscore_card'>
          <div className='scroe_text'>
            <h1>80</h1>
            <div className='base-line'></div>
            <p>
              Total Health <br></br> Score
            </p>
          </div>
          <div className='mid_text'>
            <p>
              Your health score is 81 , to make this health acore better you can
              participate in our fitness challanges
            </p>
            <div className='down_text'>
              <div className='number_text'>
                <span>BMI</span>
                <p>20.78</p>
              </div>
              <div className='number_text'>
                <span>BMI</span>
                <p>20.78</p>
              </div>
              <div className='number_text'>
                <span>BMI</span>
                <p>20.78</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HealthScore;
