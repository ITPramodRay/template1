import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import '../../../../assets/styles/Slider/_HealthServices.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import Slidercard from '../../../../assets/images/Wellbeing_Add_Card.svg';
import Carddoctor from '../../../../assets/images/Doctor_img.svg';

import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);
const HealthServicesPC = () => {
  const pagination = {
    // clickable: true,
  };
  return (
    <>
      <div className='pchealthgoals mb-5'>
        <p className='title'>Health Services & Offers</p>
        <div className='content_pchg row'>
          <div className=' col-3'>
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              pagination={pagination}
              className='mySwiper'
            >
              <SwiperSlide>
                <img src={Slidercard}></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slidercard}></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slidercard}></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slidercard}></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slidercard}></img>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='PCHS_Right_card col-9'>
            <Swiper slidesPerView={2.2} spaceBetween={30} className='mySwiper'>
              <SwiperSlide>
                <div className='HS_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Doctor Consultation </h2>
                  <p className='card_text'>
                    Get complimentry Apollo Subscription
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='HS_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Doctor Consultation </h2>
                  <p className='card_text'>
                    Get complimentry Apollo Subscription
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='HS_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Doctor Consultation </h2>
                  <p className='card_text'>
                    Get complimentry Apollo Subscription
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='HS_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Doctor Consultation </h2>
                  <p className='card_text'>
                    Get complimentry Apollo Subscription
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='HS_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Doctor Consultation </h2>
                  <p className='card_text'>
                    Get complimentry Apollo Subscription
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='HS_card'>
                  <div className='card_img'>
                    <img src={Carddoctor}></img>
                  </div>
                  <h2 className='card_title'>Doctor Consultation </h2>
                  <p className='card_text'>
                    Get complimentry Apollo Subscription
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
export default HealthServicesPC;
