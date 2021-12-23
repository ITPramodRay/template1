import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import '../../../../assets/styles/Slider/_HealthServices.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import Carddoctor from '../../../../assets/images/HealthArticles_card-img.svg';


const  HealthArticlesPC = () => {
  
  return (
    <>
        <div className='HealthArticlesPC desktopView mb-5'>
        <p className='title'>Health Articles</p>
        <div className='content_pchg row'>
          <div className='PCHS_Right_card col-12'>
            <Swiper slidesPerView={3} spaceBetween={50} className='mySwiper'>
              <SwiperSlide>
                <div className='HA_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Learn about investment to retire well with knowledge </h2>
                  <a href='#' className='HA_readbtn'>Read more</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='HA_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Learn about investment to retire well with knowledge </h2>
                  <a href='#' className='HA_readbtn'>Read more</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='HA_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Learn about investment to retire well with knowledge </h2>
                  <a href='#' className='HA_readbtn'>Read more</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='HA_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Learn about investment to retire well with knowledge </h2>
                  <a href='#' className='HA_readbtn'>Read more</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='HA_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Learn about investment to retire well with knowledge </h2>
                  <a href='#' className='HA_readbtn'>Read more</a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='HA_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Learn about investment to retire well with knowledge </h2>
                  <a href='#' className='HA_readbtn'>Read more</a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
export default HealthArticlesPC;