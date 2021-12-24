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

      {/* //mobile view */}
      <div className='continer mobileView healthscoreMV'>
        <h2 className='M_title'>Update your health score</h2>
        <div className='bg_healthscore'>
          <div className='top-text'>
            <h2>80</h2>
            <div className='rightline'></div>
            <p>
              Total Health<br></br> Score{' '}
            </p>
          </div>
          <div className='mid-text'>
            <h2>Wellness </h2>
            <p>
              Your health score is 81 , to make this health acore better you can
              participate in our fitness challanges{' '}
            </p>
          </div>
          <div className='score_text'>
            <p>BMI</p>
            <h2>20.78</h2>
            <div className='bs-text'>
              <div>
                <p>BMI</p>
                <h2>20.78</h2>
              </div>
              <div>
                <p>BMI</p>
                <h2>20.78</h2>
              </div>
            </div>
          </div>
          <button className='scrore_btn' type='submit'>Update Health scrore {'>'} </button>
        </div>
      </div>
    </>
  );
};
export default HealthScore;
