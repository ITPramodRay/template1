// Files
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Bankdetail from "./bankDetail/Bankdetail";
import Contactdetail from "./contactDetail/Contactdetail";
import Kycdetail from "./kycDetail/KycDetail";
import Nominee from "./nominee/Nominee";
import CorporatDetailsMV1 from "./corporateDetails/corporateDetailsMV1";
import CorporatDetailsMV2 from "./corporateDetails/corpotateDetailsMV2";
import CorporatDetailsMV3 from "./corporateDetails/corporateDetailsMV3";
import { myProfilePaths } from "../../utils/RoutingConstants";
import { useLocation } from "react-router-dom";
import AppHeader from "../common/Header/Header";
import PersonalDetails from "./personalDetails/Personaldetails";
import PreapprovedInsurance from "./preApprovedInsurance/PreapprovedInsurance";
import Referfriend from "./referFriend/Referfriend ";
import SideBar from "./sideBar/sideBar";
import SideBarMobile from "./sideBar/sideBarMobile";
const Myaccount = () => {
  const location = useLocation();
  console.log(location.pathname, "this is loading");
  const mobileComponents = [
    myProfilePaths.corporateDetailsMV1,
    myProfilePaths.corporateDetailsMV2,
    myProfilePaths.corporateDetailsMV3,
  ];
  return (
    <>
      {/* <AppHeader /> */}
      {location.pathname === myProfilePaths.sidebarMobile && <SideBarMobile />}
      {location.pathname === myProfilePaths.corporateDetailsMV1 && (
        <CorporatDetailsMV1 />
      )}
      {location.pathname === myProfilePaths.corporateDetailsMV2 && (
        <CorporatDetailsMV2 />
      )}
      {location.pathname === myProfilePaths.corporateDetailsMV3 && (
        <CorporatDetailsMV3 />
      )}
      <div className="my-account-dashbaord">
        <Container>
          <div className="myaccount-component  Personal-details-component">
            <Row className="">
              {/* {mobileComponents.map((ele) => {
                  console.log(location.pathname === ele)
                  return location.pathname !== ele?<SideBar />: <></>;
              })} */}
              {/* <SideBar /> */}
              <Col sm={8}>
                {location.pathname === myProfilePaths.myProfile && (
                  <PersonalDetails />
                )}
                {location.pathname === myProfilePaths.kycDetails && (
                  <Kycdetail />
                )}
                {location.pathname === myProfilePaths.bankDetails && (
                  <Bankdetail />
                )}
                {location.pathname === myProfilePaths.contactDetails && (
                  <Contactdetail />
                )}
                {location.pathname === myProfilePaths.nominee && <Nominee />}
                {location.pathname === myProfilePaths.referFriend && (
                  <Referfriend />
                )}
                {location.pathname === myProfilePaths.preApprovedInsurance && (
                  <PreapprovedInsurance />
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* add differtent rout screen */}
    </>
  );
};
export default Myaccount;
