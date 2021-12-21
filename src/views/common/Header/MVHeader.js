import React from "react";
import Wlogohead from '../../../assets/images/W_head-logo.svg';
import Wdownicon from '../../../assets/images/W_Arrow.svg';
import Wnotification from '../../../assets/images/W_notification.svg';

const MVHeader = () => {
  return (
    <>
      <header className="Dashbord-header-MB">
         <div className="top-mb-head">
           <div className="profile">
             <img src="https://picsum.photos/200" className="profile-pic"></img>
             <img src={Wdownicon}></img>
           </div>
           <img src={Wlogohead}></img>
           <img src={Wnotification}></img>
         </div>
         <div className="down-mb-head">
         <ul>
             <li>
               <a href="#">Dashboard</a>
             </li>
             <li>
               <a href="#">Invest</a>
             </li>
             <li>
               <a href="#">Plan</a>
             </li>
             <li>
               <a href="#">Advisory</a>
             </li>
             <li>
               <a href="#">Learn</a>
             </li>
             <li>
               <a href="#" className="active_link">
                 Wellbeing
               </a>
             </li>
           </ul>
         </div>
       </header>
    </>
  );
};

export default MVHeader;
