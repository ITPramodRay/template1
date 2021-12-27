import React from 'react';
import BGPatten from '../../../assets/images/BG_patten.svg';

const  CardHead = (Cardheadtext,props) => {
  
  return (
    <>
        <div className='WB_headcard'>
           <div className="container d-flex justify-content-between align-items-center">
           <p className='Hcard_text'>Card text </p>
           <img src={BGPatten}></img>
           </div>
          
        </div>
    </>
  );
}
export default CardHead;
