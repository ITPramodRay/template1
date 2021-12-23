import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import '../../../../assets/styles/Slider/_HealthServices.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import Emotionalbg from '../../../../assets/images/EmotionalandMentalWellbeing.svg';

import SwiperCore, {
    Navigation
  } from 'swiper'; 
  SwiperCore.use([Navigation]);    

const  EmotionalMentalWellbeing = () => {
     
  
  return (
    <>
        <div className='EmotionalMentalWellbeingPC desktopView mb-5'>
        <p className='title'>Emotional and Mental Well being</p>
        <div className=' row'>
          <div className=' col-12'>
            <Swiper navigation={true} slidesPerView={1} spaceBetween={80} className='mySwiper'>
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base'>
                    <img src={Emotionalbg}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='EmotionalMentalWellbeing_card_base'>
                    <img src={Emotionalbg}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='EmotionalMentalWellbeing_card_base'>
                    <img src={Emotionalbg}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='EmotionalMentalWellbeing_card_base'>
                    <img src={Emotionalbg}></img>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='EmotionalMentalWellbeing_card_base'>
                    <img src={Emotionalbg}></img>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
export default EmotionalMentalWellbeing;