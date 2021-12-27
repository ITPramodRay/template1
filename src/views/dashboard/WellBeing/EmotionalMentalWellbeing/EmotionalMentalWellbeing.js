import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import '../../../../assets/styles/Slider/_HealthServices.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';


import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);



const EmotionalMentalWellbeing = () => {
  const pagination = {
  clickable: true,
};
  return (
    <>
      <div className='EmotionalMentalWellbeingPC desktopView mb-5'>
        <p className='title'>Emotional and Mental Well being</p>
        <div className=' row'>
          <div className=' col-12'>
            <Swiper
              navigation={true}
              slidesPerView={1}
              spaceBetween={150}
              className='mySwiper'
            >
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base'></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base'></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base'></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base'></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base'></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className='mobileView mb-3'>
        <p className='M_title'>Emotional and Mental Well being</p>
        <div className=' row'>
          <div className=' col-12'>
            <Swiper slidesPerView={1} spaceBetween={80} className='mySwiper'  pagination={pagination}>
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base_MV'>
                  <h2>
                    Self Assessment <br></br>Test for Depression
                  </h2>
                  <div>
                    <p>₹ 150</p>
                    <button>Start Now {'>'}</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base_MV'>
                  <h2>
                    Self Assessment <br></br>Test for Depression
                  </h2>
                  <div>
                    <p>₹ 150</p>
                    <button>Start Now {'>'}</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base_MV'>
                  <h2>
                    Self Assessment <br></br>Test for Depression
                  </h2>
                  <div>
                    <p>₹ 150</p>
                    <button>Start Now {'>'}</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base_MV'>
                  <h2>
                    Self Assessment <br></br>Test for Depression
                  </h2>
                  <div>
                    <p>₹ 150</p>
                    <button>Start Now {'>'}</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='EmotionalMentalWellbeing_card_base_MV'>
                  <h2>
                    Self Assessment <br></br>Test for Depression
                  </h2>
                  <div>
                    <p>₹ 150</p>
                    <button>Start Now {'>'}</button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmotionalMentalWellbeing;
