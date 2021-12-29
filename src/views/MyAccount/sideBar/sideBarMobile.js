import React from "react";

import Avatar from "../../../assets/images/myaccount/Avatar.png";
import Pencil from "../../../assets/images/myaccount/Pencil.svg";
import Bank from "../../../assets/images/myaccount/Bank.svg";
import CaretDown from "../../../assets/images/myaccount/CaretDown.svg";
import Checks from "../../../assets/images/myaccount/Checks.svg";
import CircleWavyCheck from "../../../assets/images/myaccount/CircleWavyCheck.svg";
import DeviceMobileCamera from "../../../assets/images/myaccount/DeviceMobileCamera.svg";
import IdentificationCard from "../../../assets/images/myaccount/IdentificationCard.svg";
import Pattern from "../../../assets/images/pattern-top-right.svg";
import Receipt from "../../../assets/images/myaccount/Receipt.svg";
import ShareNetwork from "../../../assets/images/myaccount/ShareNetwork.svg";
import shield from "../../../assets/images/myaccount/shield.svg";
import UserCirclePlus from "../../../assets/images/myaccount/UserCirclePlus.svg";
import UserList from "../../../assets/images/myaccount/UserList.svg";
import whatsapp from "../../../assets/images/myaccount/whatsapp.svg";
import leftIcon from "../../../assets/images/Left Icon.svg";
import { useHistory, useLocation } from "react-router-dom";
import { myProfilePaths } from "../../../utils/RoutingConstants";

import "./sidebar-mobile.scss";

function SideBarMobile() {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <div className="profile-page-mobile">
        <header className="profile-header-mobile">
          {/* Back Button  */}
          <button className="profile-back-btn text-btn position-absolute">
            <img src={leftIcon} alt="" />
          </button>
          <img src={Pattern} alt="" className="ppm-pattern position-absolute" />
          <div className="profile-header-mobile-inner d-flex justify-content-center container">
            <div className="profile-avatar-mobile position-relative">
              <img src={Avatar} alt="" />
              <button className="edit-profile text-btn">
                <img src={Pencil} alt="" />
              </button>
            </div>
          </div>
        </header>

        <div className="container">
          <section className="link-corporate-account-mobile position-relative d-flex align-items-start gap-3">
            <div className="icon">
              <img src={shield} alt="" />
            </div>
            <div className="content">
              <h2 className="lca-title">Link Corporate Account</h2>
              <p className="my-2 lca-desc">
                Avail corporate account benefits by verifying your work email ID
              </p>

              <button className="link-btn">Link Now</button>
            </div>
          </section>

          <div className="whatsapp-notif-section d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img src={whatsapp} alt="" />
              <p className="wns-title">Get whatsapp notifications</p>
            </div>
          </div>

          <nav className="profile-nav-mobile">
            <ul>
              <li>
                <button>
                  <img src={IdentificationCard} alt="" /> Personal Details
                </button>
              </li>
              <li>
                <button>
                  <img src={CircleWavyCheck} alt="" /> KYC Details
                </button>
              </li>
              <li>
                <button>
                  <img src={Bank} alt="" /> Bank Details
                </button>
              </li>
              <li>
                <button>
                  <img src={DeviceMobileCamera} alt="" /> Contact Details
                </button>
              </li>
              <li>
                <button>
                  <img src={UserCirclePlus} alt="" /> Add Nominee
                </button>
              </li>
              <li>
                <button>
                  <img src={UserList} alt="" /> Corporate Details
                </button>
              </li>
              <li>
                <button>
                  <img src={Receipt} alt="" /> Transaction
                </button>
              </li>
              <li>
                <button>
                  <img src={ShareNetwork} alt="" /> Refer a Friend
                </button>
              </li>
              <li>
                <button>
                  <img src={Checks} alt="" /> Preapproved Insurance
                </button>
              </li>
              <li className="logout">
                <div className="logout-section">
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <div>
                      <span>Signed in As</span>
                      <p className="fw-bold">Ramesh Nair</p>
                    </div>
                    <button className="ls-btn">Logout</button>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SideBarMobile;
