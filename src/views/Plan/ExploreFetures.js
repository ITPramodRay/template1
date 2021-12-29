import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import cardicon from "../../assets/images/Riskprofilling.svg";

import "../../assets/styles/Slider/SliderMain.scss";

// import 'swiper/swiper.scss';
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const ExploreFetures = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <>
      <div className="desktopView ExploreSliderPC_base">
        <p className="title"> Explore other features</p>
        <div className="ExploreSlider">
          <Swiper
            navigation={true}
            slidesPerView={3}
            spaceBetween={20}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* mobileview */}
      <div className="mobileView ExploreSliderPC_base">
        <p className="M_title"> Nudges</p>
        <div className="ExploreSlider">
          <Swiper slidesPerView={1.2} spaceBetween={20} className="mySwiper">
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-item">
                <div>
                  <img alt="" className="icon" src={cardicon}></img>
                </div>
                <div className="text-div">
                  <h2>Risk profilling </h2>
                  <p>Quantitative analysis of risk profilling </p>
                  <p className="link">Calculator now</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default ExploreFetures;
