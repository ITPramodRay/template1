import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { myProfilePaths } from "../../utils/RoutingConstants";
import AppHeader from "../common/Header/Header";
import Bankdetail from "./bankDetail/Bankdetail";
import Contactdetail from "./contactDetail/Contactdetail";
import Kycdetail from "./kycDetail/KycDetail";
import Nominee from "./nominee/Nominee";
// Files
import PersonalDetails from "./personalDetails/Personaldetails";
import PreapprovedInsurance from "./preApprovedInsurance/PreapprovedInsurance";
import Referfriend from "./referFriend/Referfriend ";
import SideBar from "./sideBar/sideBar";

const Myaccount = () => {
  const location = useLocation();
  console.log(window.location, "this is loading");

  return (
    <Fragment>
      <AppHeader />
      <div className="my-account-dashbaord">
        <Container>
          <div className="myaccount-component  Personal-details-component">
            <Row className="">
              <SideBar />
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
    </Fragment>
  );
};

export default Myaccount;
