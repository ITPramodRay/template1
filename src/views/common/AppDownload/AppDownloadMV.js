import React, { useRef, useState } from 'react';

import Google from '../../../assets/images/Google.svg';
import Appstore from '../../../assets/images/Apple.svg';
import appmobile from '../../../assets/images/app_mobile.svg';
import BG from '../../../assets/images/AppBanner_mobile-01.svg';

const AppDownloadMV = () => {
  return (
    <>
      <div className='continer mobileView AppbannerMV'>
        <h2 className='M_title'>Update your health score</h2>
        <img className='appbanner_mv_bg' src={BG}></img>
        <div className='data_app_banner'>
          <div>
          <h4>Plan your <br></br> retirement well</h4>
          <p>Download the App</p>
          <div className='img_btn'>
          <img src={Appstore}></img>
            <img src={Google}></img>
          </div>
          </div>
          <img src={appmobile}></img>
        </div>
      </div>
      
    </>
  );
};
export default AppDownloadMV;
