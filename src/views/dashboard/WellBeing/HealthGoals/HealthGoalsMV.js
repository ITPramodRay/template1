import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import Glass from '../../../../assets/images/Barbell.svg';
import close from '../../../../assets/images/X.svg';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';


// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function HealthGoalsMV() {
  const pagination = {
    clickable: true,
  };

  return (
    <>
      <div className='mvhealthgoals'>
        <div className='top_hg'>
          <h2 className='M_title'>My Health Goals</h2>
          <button className='Mbtn'>Add Goal</button>
        </div>
        <div className='mid_hg MVHG_Left_card'>
          <div className='head_text_div'>
            <h2>Today’s Health goal</h2>
          </div>
          <p>
            Add health goals or tick mark your today's fitness activity here
          </p>
        </div>
        <div className='down_hg mt-3'>
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            pagination={pagination}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='card-HG'>
                <div>
                  <img src={Glass}></img>
                  <p>Drink Water</p>
                </div>
                <btn className='HG-btn'>Done</btn>
              </div>
              <div className='close_icon'>
                <img src={close}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card-HG'>
                <div>
                  <img src={Glass}></img>
                  <p>Drink Water</p>
                </div>
                <btn className='HG-btn'>Done</btn>
              </div>
              <div className='close_icon'>
                <img src={close}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card-HG'>
                <div>
                  <img src={Glass}></img>
                  <p>Drink Water</p>
                </div>
                <btn className='HG-btn'>Done</btn>
              </div>
              <div className='close_icon'>
                <img src={close}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card-HG'>
                <div>
                  <img src={Glass}></img>
                  <p>Drink Water</p>
                </div>
                <btn className='HG-btn'>Done</btn>
              </div>
              <div className='close_icon'>
                <img src={close}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card-HG'>
                <div>
                  <img src={Glass}></img>
                  <p>Drink Water</p>
                </div>
                <btn className='HG-btn'>Done</btn>
              </div>
              <div className='close_icon'>
                <img src={close}></img>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
