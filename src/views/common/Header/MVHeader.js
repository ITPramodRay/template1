import React from "react";
import Wlogohead from '../../../assets/images/W_head-logo.svg';
import Wdownicon from '../../../assets/images/W_Arrow.svg';
import Wnotification from '../../../assets/images/W_notification.svg';
import {dashboardPaths} from "../../../utils/RoutingConstants"
import {Link} from "react-router-dom"
const MVHeader = ({activepath}) => {
  return (
    <>
      <header className="Dashbord-header-MB">
         <div className="top-mb-head">
           <div className="profile">
             <img alt="" src="https://picsum.photos/200" className="profile-pic"></img>
             <img alt="" src={Wdownicon}></img>
           </div>
           <img alt="" src={Wlogohead}></img>
           <img alt="" src={Wnotification}></img>
         </div>
         <div className="down-mb-head">
         <ul>
             <li>
               <Link className={activepath===dashboardPaths.dashboard?"active_link":""}>Dashboard</Link>
             </li>
             <li>
               <Link className={activepath===dashboardPaths.invest?"active_link":""}>Invest</Link>
             </li>
             <li>
               <Link className={activepath===dashboardPaths.plan?"active_link":""}>Plan</Link>
             </li>
             <li>
               <Link className={activepath===dashboardPaths.advisory?"active_link":""}>Advisory</Link>
             </li>
             <li>
               <Link className={activepath===dashboardPaths.learn?"active_link":""}>Learn</Link>
             </li>
             <li>
               <Link  className={activepath===dashboardPaths.wellbeing?"active_link":""}>
                 Wellbeing
               </Link>
             </li>
           </ul>
         </div>
       </header>
    </>
  );
};

export default MVHeader;
