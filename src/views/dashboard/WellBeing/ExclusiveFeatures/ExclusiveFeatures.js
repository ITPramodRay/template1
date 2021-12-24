import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import '../../../../assets/styles/Slider/_HealthServices.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import AgeTimer from '../../../../assets/images/AgeTimer.svg';

const ExclusiveFeatures = () => {
  return (
    <>
      <div className='row exclusivefeaturesPC'>
        <p className='title'>
          Use our exclusive features to know more about your health condition
        </p>
        <Swiper slidesPerView={4} spaceBetween={25} className='mySwiper'>
          <SwiperSlide>
            <div className='exclusivefeaturesPC_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='exclusivefeaturesPC_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='exclusivefeaturesPC_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='exclusivefeaturesPC_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='exclusivefeaturesPC_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='exclusivefeaturesPC_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      {/* Mobile view */}
      <div className='row mobileView '>
        <p className='M_title'>
          Use our exclusive features to know more about your health condition
        </p>
        <Swiper slidesPerView={1.2} spaceBetween={25} className='mySwiper'>
          <SwiperSlide>
            <div className='exclusivefeaturesMV_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='exclusivefeaturesMV_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='exclusivefeaturesMV_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='exclusivefeaturesMV_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='exclusivefeaturesMV_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='exclusivefeaturesMV_slider_card'>
              <div className='text_div'>
                <h1 className='main_text'>Age Timer</h1>
                <p>With evolving priorities and altering lifestyles, </p>
                <btn className='card_btn'>Know more</btn>
              </div>
              <div className='bg_img'>
                <img src={AgeTimer}></img>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default ExclusiveFeatures;
