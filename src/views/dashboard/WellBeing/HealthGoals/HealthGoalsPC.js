import React from 'react';

import Glass from '../../../../assets/images/Barbell.svg';
import close from '../../../../assets/images/X.svg';
import addicon from '../../../../assets/images/Add icon.svg';

const  HealthGoalsPC = () => {
  
  return (
    <>
        <div className='pchealthgoals'>
            <p className='title'>Health Goals</p>
            <div className='content_pchg row'>
                <div className='PCHG_Left_card col-3'>
                    <div className='head_text_div'>
                    <h2>Today’s Health goal</h2>
                    </div>
                    <p>Add health goals or tick mark your today's fitness activity here</p>
                </div>
                <div className='PCHG_Right_card col-9'>
                    <div className='card-HG'>
                        <div className='data_card_HG'>
                            <div>
                                <img src={Glass}></img>
                                <p>Drink Water</p>
                            </div>
                            <btn className="HG-btn">Done</btn>
                        </div>
                        <div className='close_icon'>
                            <img src={close}></img>
                        </div>
                    </div>
                    <div className='card-HG'>
                        <div className='data_card_HG'>
                            <div>
                                <img src={Glass}></img>
                                <p>Drink Water</p>
                            </div>
                            <btn className="HG-btn">Done</btn>
                        </div>
                        <div className='close_icon'>
                            <img src={close}></img>
                        </div>
                    </div>
                    <div className='card-HG'>
                        <div className='data_card_HG'>
                            <div>
                                <img src={Glass}></img>
                                <p>Drink Water</p>
                            </div>
                            <btn className="HG-btn">Done</btn>
                        </div>
                        <div className='close_icon'>
                            <img src={close}></img>
                        </div>
                    </div>
                    <div className='card-HG add_icon_main'>
                        <div className='data_card_HG add_icon'>
                            <img className='add_icon align-items-center' src={addicon}></img>
                            <p>Add Goal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
export default HealthGoalsPC;
