import React, { useRef, useState } from 'react';

import Appbanner from '../../../assets/images/App_Banner.svg';
import Google from '../../../assets/images/Google.svg';
import Appstore from '../../../assets/images/Apple.svg';

const AppDownloadPC = () => {
  return (
    <>
      <div className='desktopView AppdannerPC  mb-5'>
        {/* <div className='img_div'>
          <img src={Appbanner}></img>
        </div> */}
        <div className='AppdannerPC_text'>
          <h2>Plan your retirement well</h2>
          <div className='img_btn'>
            <img src={Google}></img>
            <img src={Appstore}></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppDownloadPC;
