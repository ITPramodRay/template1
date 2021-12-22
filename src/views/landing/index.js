import React, { useEffect, useState, lazy } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

import Mainbanner from "./AppBanner/Mainbanner";
import PrepareRetirement from "./PlanRetirment/PrepareRetirement";
import Products from "./Products/Products";
import Servies from "./Services/Services";
import Recommended from "./Recommended/Recommended";
import Ads from "./Ad/Ads";
import Faq from "./FAQ/FAQ";
import Footer from "../common/Footer/Footer";
import Testimonials from "./Testimonials/Testimonials";

const Navbar = lazy(() => import("../common/Header/Navbarmenu"));

export default function LandingPage({ ...props }) {
  const history = useHistory();
  return (
    <>
      <Navbar />
      <Mainbanner />
      <Container>
        <PrepareRetirement />
      </Container>
      <Container fluid={true} className="products-container">
        <Products />
      </Container>
      <Container fluid={true}>
        <Servies />
      </Container>
      <Recommended />
      <Testimonials />
      <Container fluid={true}>
        <Ads />
      </Container>
      <Container fluid={true}>
        <Faq />
      </Container>
      <Footer />
    </>
  );
}
