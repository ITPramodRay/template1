import React from 'react';
import logo from '../../../assets/images/W_head-logo.svg';
import Errorill from '../../../assets/images/404 Error-bro 1.svg';
import Clouds from '../../../assets/images/Clouds.svg';
import {useHistory} from "react-router-dom"

const Error404 = () => {
  const history = useHistory()
  return (
    <>
      <div className='base_div'>
        <div className='container'>
          <img src={logo} className='logo'></img>
        </div>
        <div className='container data'>
            <img src={Clouds}></img>
          <div>
            <img src={Errorill} className='errorimg'></img>
            <button className='BOback_btn' onClick={()=>history.goBack()}>Go Back</button>
          </div>
          <img src={Clouds} className='Clouds_right'></img>
        </div>
      </div>
    </>
  );
};

export default Error404;
