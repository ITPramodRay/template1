import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import cardicon from '../../assets/images/HouseLine.svg';
import Mcardicon from '../../assets/images/Calculator.svg';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

const SelectGoal = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <>
      <div className='SelectGoal desktopView'>
        <p class='title'>Select a goal you want to invest for</p>
        <div className='base-card-selectgoal'>
          <div className='navbar-tabe-base'>
            <button className='navlink-tab navlink-tab-active'>
              Financial planning
            </button>
            <button className='navlink-tab'>Non-Financial planning </button>
          </div>
          <div className='card-item_base'>
            <div className='item-card'>
              <img src={cardicon}></img>
              <h2>New Home</h2>
            </div>
            <div className='item-card'>
              <img src={cardicon}></img>
              <h2>New Home</h2>
            </div>
            <div className='item-card'>
              <img src={cardicon}></img>
              <h2>New Home</h2>
            </div>
            <div className='item-card'>
              <img src={cardicon}></img>
              <h2>New Home</h2>
            </div>
            <div className='item-card'>
              <img src={cardicon}></img>
              <h2>New Home</h2>
            </div>
            <div className='item-card'>
              <img src={cardicon}></img>
              <h2>New Home</h2>
            </div>
          </div>
        </div>
      </div>

      {/* mobileview */}
      <div className='mobileView SelectGoalMV'>
        <div className='FGP_MV'>
          <p class='M_title'>Financial goal planning</p>
          <a className='link'>View all</a>
        </div>
        <div className='card_gride'>
          <div className='card_items'>
            <img src={cardicon}></img>
            <h2>New Home</h2>
          </div>
          <div className='card_items'>
            <img src={cardicon}></img>
            <h2>New Home</h2>
          </div>
          <div className='card_items'>
            <img src={cardicon}></img>
            <h2>New Home</h2>
          </div>
          <div className='card_items'>
            <img src={cardicon}></img>
            <h2>New Home</h2>
          </div>
          <div className='card_items'>
            <img src={cardicon}></img>
            <h2>New Home</h2>
          </div>
          <div className='card_items'>
            <img src={cardicon}></img>
            <h2>New Home</h2>
          </div>
        </div>
        <div>
          <p class='M_title'>Non - financial goal planning</p>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={10}
            pagination={pagination}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='SelectGoalslider-MV'>
                <img src={Mcardicon}></img>
                <p>Tax planning</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='SelectGoalslider-MV'>
                {' '}
                <img src={Mcardicon}></img>
                <p>Tax planning</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='SelectGoalslider-MV'>
                {' '}
                <img src={Mcardicon}></img>
                <p>Tax planning</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='SelectGoalslider-MV'>
                {' '}
                <img src={Mcardicon}></img>
                <p>Tax planning</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default SelectGoal;
