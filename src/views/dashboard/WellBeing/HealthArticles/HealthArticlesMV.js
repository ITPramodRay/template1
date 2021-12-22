import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import Glass from '../../../../assets/images/Barbell.svg';
import close from '../../../../assets/images/X.svg';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import Carddoctor from '../../../../assets/images/HealthArticles_card-img.svg';


import Offercard from '../../../../assets/images/Offer_HS_img.svg'
import Ads from '../../../landing/Ad/Ads';

const  HealthArticlesMV = () => {
  const pagination = {
    clickable: true,
  };
  
  return (
    <>
        <div className='HealthArticlesMV mobileView'>
        <div className='top_hg'>
          <h2 className='M_title'>Health Services & Offers</h2>
        </div>
        <div className='down_hg mt-5'>
        <Swiper
            slidesPerView={1.2}
            spaceBetween={15}
            pagination={pagination}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='sliderCard-HS-MV'>
              <div className='HA_card'>
              <div className='card_img'>
                <img src={Carddoctor}></img>
              </div>
              <h2 className='card_title'>Learn about investment to retire well with knowledge </h2>
                <a href='#' className='HA_readbtn'>Read more</a>
            </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderCard-HS-MV'>
              <div className='HA_card'>
              <div className='card_img'>
                <img src={Carddoctor}></img>
              </div>
              <h2 className='card_title'>Learn about investment to retire well with knowledge </h2>
                <a href='#' className='HA_readbtn'>Read more</a>
            </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderCard-HS-MV'>
              <div className='HA_card'>
              <div className='card_img'>
                <img src={Carddoctor}></img>
              </div>
              <h2 className='card_title'>Learn about investment to retire well with knowledge </h2>
                <a href='#' className='HA_readbtn'>Read more</a>
            </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderCard-HS-MV'>
              <div className='HA_card'>
              <div className='card_img'>
                <img src={Carddoctor}></img>
              </div>
              <h2 className='card_title'>Learn about investment to retire well with knowledge </h2>
                <a href='#' className='HA_readbtn'>Read more</a>
            </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default HealthArticlesMV;