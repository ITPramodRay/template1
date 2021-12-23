import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import '../../../../assets/styles/Slider/SliderMain.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';


const  PhysicalWellbeing = () => {
    const pagination = {
        clickable: true,
      };
  return (
    <>
        <div className='PhysicalWellbeingPC'>
            <p className='title'>Physical Well being</p>
            <div className='row'>
                <div className=' col-3'>
                <Swiper
              slidesPerView={1}
              spaceBetween={15}
              pagination={pagination}
              className='mySwiper'
            >
              <SwiperSlide>
                <div className='PhysicalWellbeing_sider'>
                    <div className='img_slider'>
                        <img src='https://picsum.photos/200'></img>
                    </div>
                    <div className='down_text'>
                        <h2>The relationship between physical and mental health: A mediation analysis</h2>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='PhysicalWellbeing_sider'>
                    <div className='img_slider'>
                        <img src='https://picsum.photos/200'></img>
                    </div>
                    <div className='down_text'>
                        <h2>The relationship between physical and mental health: A mediation analysis</h2>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='PhysicalWellbeing_sider'>
                    <div className='img_slider'>
                        <img src='https://picsum.photos/200'></img>
                    </div>
                    <div className='down_text'>
                        <h2>The relationship between physical and mental health: A mediation analysis</h2>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='PhysicalWellbeing_sider'>
                    <div className='img_slider'>
                        <img src='https://picsum.photos/200'></img>
                    </div>
                    <div className='down_text'>
                        <h2>The relationship between physical and mental health: A mediation analysis</h2>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='PhysicalWellbeing_sider'>
                    <div className='img_slider'>
                        <img src='https://picsum.photos/200'></img>
                    </div>
                    <div className='down_text'>
                        <h2>The relationship between physical and mental health: A mediation analysis</h2>
                    </div>
                </div>
              </SwiperSlide>
            </Swiper>
                </div>
                <div className='col-9 plancard_base'>
                   <div className='plancard_iteam'>
                        <div className='left_text_card'>
                            <h4>Starter Plan</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className='right_text_card'>
                            <h3>₹ 99</h3>
                        </div>
                   </div>
                   <div className='plancard_iteam'>
                        <div className='left_text_card'>
                            <h4>Starter Plan</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className='right_text_card'>
                            <h3>₹ 99</h3>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </>
  );
}
export default PhysicalWellbeing;
