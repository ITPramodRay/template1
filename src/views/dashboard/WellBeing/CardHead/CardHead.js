import React from 'react';
import BGPatten from '../../../../assets/images/BG_patten.svg';

const  CardHead = () => {
  
  return (
    <>
        <div className='WB_headcard'>
            <p className='Hcard_text'>Plan your future goal and risk profilling </p>
            <img src={BGPatten}></img>
        </div>
    </>
  );
}
export default CardHead;
