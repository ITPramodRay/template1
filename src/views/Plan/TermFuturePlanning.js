import React from 'react';
import profile from '../../assets/images/profile book.svg';
import Clock from '../../assets/images/Clock.svg';
import Coin from '../../assets/images/Coin.svg';
import HandPointing from '../../assets/images/HandPointing.svg';
import ProjectorScreenChart from '../../assets/images/ProjectorScreenChart.svg';

const TermFuturePlanning = () => {
  return (
    <>
      <div className='TermFuturePlanning'>
        <p className='title'>
          {' '}
          Based on your life meter gap assessment you can start short term, mid
          term & long term future planning
        </p>
        <p className='M_title'>Life Meter</p>
        <div className='row'>
          <div className='col-md-12 col-12'>
            <div className='graph_card'>
              <div className='card_head'>
                <h2>On age 45 you will get ₹ 1,26,57000 investment</h2>
              </div>
              <div className='div_text'>
                {/* <div className='T-div'>
                        <p>Today</p>
                        <p>Age 80</p>
                    </div> */}
                <div className='D-div'>
                  <div className='top'>
                    <div className='dot'></div>
                    <p>Your gap assessment is </p>
                    <h2>₹ 3,460</h2>
                  </div>
                </div>
                <div className='down'>
                  <p className='p_one'>Your Retiral score is 100%</p>
                  <p>
                    Going great, keep shuffling your portfolio to get more
                    returns. Avail Advisory{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12 col-12 mt-4 mb-4 desktopView'>
            <div className='BookSlot'>
              <div className='bookslottop'>
                <div className='profile'>
                  <img src={profile}></img>
                </div>
                <div className='mid-data'>
                  <h2>
                    Schedule a free call session with our advisor Mr. Siricha
                  </h2>
                  <div className='icon-text'>
                    <div className='icon-item'>
                      <img src={Clock}></img>
                      <p>Experience | 15 yrs </p>
                    </div>
                    <div className='icon-item'>
                      <img src={Coin}></img>
                      <p>AUM handled | 30 Cr </p>
                    </div>
                  </div>
                </div>
                <div className='btn_div'>
                  <button>Book a Slot</button>
                </div>
              </div>
            </div>
            <div className='advisor_div'>
                    <h2>What can you expect in the free call with advisor?</h2>
                    <hr></hr>
                    <div className='icon-group'>
                        <div className='icon-data-group'>
                            <img src={HandPointing}></img>
                            <p>Book an available slot & Get a call back from advisor</p>
                        </div>
                        <div className='icon-data-group'>
                            <img src={ProjectorScreenChart}></img>
                            <p>health check of your financial portfolio</p>
                        </div>
                    </div>
            </div>
          </div>
          <div className='col-12 mobileView'>
            <div className='BookMV'>
                <div className='top'>
                    <img src={profile}></img>
                    <h2>Schedule a free call session with our advisor Mr. Siricha</h2>
                </div>
                <div className='mid-data'>
                    <p className='line_p'>Experience : 15 yrs </p>
                    <p>AUM handled : 30 Cr</p>
                </div>
                <div className='btn_div'>
                  <button>Book a Slot</button>
                </div>
                

            </div>
          </div>
        </div>
      </div>

      {/* mobileview */}
    </>
  );
};
export default TermFuturePlanning;
