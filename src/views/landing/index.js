import React, { lazy } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";

import Footer from "../common/Footer/Footer";
import Ads from "./Ad/Ads";
import Mainbanner from "./AppBanner/Mainbanner";
import Faq from "./FAQ/Faq";
import PrepareRetirement from "./PlanRetirment/PrepareRetirement";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Servies from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Navbar = lazy(() => import("../common/Header/Navbarmenu"));

const LandingPage = () => {
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
};

export default LandingPage;
