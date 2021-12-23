import React from 'react';

import Glass from '../../../../assets/images/Barbell.svg';
import close from '../../../../assets/images/X.svg';
import addicon from '../../../../assets/images/Add icon.svg';

const  PhysicalWellbeing = () => {
  
  return (
    <>
        <div className='PhysicalWellbeingPC'>
            <p className='title'>Physical Well being</p>
            <div className=' row'>
                <div className=' col-3'>
                    <h1>hiii</h1>
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
