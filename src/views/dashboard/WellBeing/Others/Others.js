import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import '../../../../assets/styles/Slider/_HealthServices.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import Otherslider from '../../../../assets/images/Other_slider.svg';

import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

const Others = () => {
  return (
    <>
      <div className='OtherSlider desktopView mb-5'>
        <p className='title'>Explore Other categories</p>
        <div className=' row'>
          <div className=' col-12'>
            <Swiper slidesPerView={3} spaceBetween={30} className='mySwiper'>
              <SwiperSlide>
                <div className='OtherSlider_img'>
                  <img src={Otherslider}></img>
                  <h2>Senior Care</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='OtherSlider_img'>
                  <img src={Otherslider}></img>
                  <h2>Senior Care</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='OtherSlider_img'>
                  <img src={Otherslider}></img>
                  <h2>Senior Care</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='OtherSlider_img'>
                  <img src={Otherslider}></img>
                  <h2>Senior Care</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='OtherSlider_img'>
                  <img src={Otherslider}></img>
                  <h2>Senior Care</h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className='OtherSlider mobileView mb-0'>
        <p className='title'>Explore Other categories</p>
        <div className=' row'>
          <div className=' col-12'>
            <Swiper slidesPerView={1.2} spaceBetween={30} className='mySwiper'>
              <SwiperSlide>
                <div className='OtherSlider_img'>
                  <img src={Otherslider}></img>
                  <h2>Senior Care</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='OtherSlider_img'>
                  <img src={Otherslider}></img>
                  <h2>Senior Care</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='OtherSlider_img'>
                  <img src={Otherslider}></img>
                  <h2>Senior Care</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='OtherSlider_img'>
                  <img src={Otherslider}></img>
                  <h2>Senior Care</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='OtherSlider_img'>
                  <img src={Otherslider}></img>
                  <h2>Senior Care</h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
export default Others;
