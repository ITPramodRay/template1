import React, { useRef, useState } from 'react';

import Google from '../../../assets/images/Google.svg';
import Appstore from '../../../assets/images/Apple.svg';
import appmobile from '../../../assets/images/app_mobile.svg';

const AppDownloadMV = () => {
  return (
    <>
      <div className='mobileView AppbannerMV'>
        {/* <h2>
          Plan your <br></br> retirement well
        </h2>
        <div className='btn_main'>
          <div className='btn_box'>
            <p>Download the App</p>
            <div className='btn_div'>
              <img src={Google}></img>
              <img src={Appstore}></img>
            </div>
          </div>
        </div>
        <div className='mockup'>
            <img src={appmobile}></img>
          </div> */}
          <div className='side_left'>
            <h2>Plan your <br></br> retirement well</h2>
            <p>Download the App</p>
            <div className='btn_div'>
              <img src={Google}></img>
              <img src={Appstore}></img>
            </div>
          </div>
      </div>
    </>
  );
};
export default AppDownloadMV;
