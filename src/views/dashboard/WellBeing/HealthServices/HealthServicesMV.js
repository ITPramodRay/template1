import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import Glass from '../../../../assets/images/Barbell.svg';
import close from '../../../../assets/images/X.svg';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import Carddoctor from '../../../../assets/images/Doctor_img.svg';


import Offercard from '../../../../assets/images/Offer_HS_img.svg'


// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
const  HealthServicesMV = () => {
  const pagination = {
    clickable: true,
  };
  
  return (
    <>
        <div className='MVhelthservices'>
        <div className='top_hg'>
          <h2 className='M_title'>Health Services & Offers</h2>
        </div>
        <div className='HSmvCardAdd'>
          <div className='head_text_div'>
            <img src={Offercard}></img>
          </div>
        </div>
        <div className='down_hg mt-5'>
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            pagination={pagination}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='sliderCard-HS-MV'>
              <div className='HS_card'>
              <div className='card_img'>
                <img src={Carddoctor}></img>
              </div>
              <h2 className='card_title'>Doctor Consultation </h2>
                <p className='card_text'>Get complimentry Apollo Subscription</p>
            </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderCard-HS-MV'>
              <div className='HS_card'>
              <div className='card_img'>
                <img src={Carddoctor}></img>
              </div>
              <h2 className='card_title'>Doctor Consultation </h2>
                <p className='card_text'>Get complimentry Apollo Subscription</p>
            </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderCard-HS-MV'>
              <div className='HS_card'>
              <div className='card_img'>
                <img src={Carddoctor}></img>
              </div>
              <h2 className='card_title'>Doctor Consultation </h2>
                <p className='card_text'>Get complimentry Apollo Subscription</p>
            </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderCard-HS-MV'>
              <div className='HS_card'>
              <div className='card_img'>
                <img src={Carddoctor}></img>
              </div>
              <h2 className='card_title'>Doctor Consultation </h2>
                <p className='card_text'>Get complimentry Apollo Subscription</p>
            </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default HealthServicesMV;
