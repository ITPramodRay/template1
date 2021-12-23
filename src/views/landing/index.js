import React, { lazy, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import Skeleton from '@mui/material/Skeleton';
import "react-multi-carousel/lib/styles.css";



const Mainbanner = lazy(() => import("./AppBanner/Mainbanner"));
const MainbannerMobile = lazy(() => import("./AppBanner/Mainbanner-Mobile"));
const Footer = lazy(() => import("../common/Footer/Footer"));
const Ads = lazy(() => import("./Ad/Ads"));
const Faq = lazy(() => import("./FAQ/Faq"));
const FaqMobile = lazy(() => import("./FAQ/Faq-Mobile"));
const PrepareRetirement = lazy(() => import("./PlanRetirment/PrepareRetirement"));
const Products = lazy(() => import("./Products/Products"));
const ProductsMobile = lazy(() => import("./Products/Products-Mobile"));
const Recommended = lazy(() => import("./Recommended/Recommended"));
const Servies = lazy(() => import("./Services/Services"));
const ServiesMobile = lazy(() => import("./Services/Service-Mobile"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const Navbar = lazy(() => import("../common/Header/Navbarmenu"));



const LandingPage = () => {
  const history = useHistory();

  return (
    <>
      <Navbar />
      <div className="desktopView">
      <Suspense fallback={<Skeleton variant="rectangular" width={210} height={118} />}>

        <Mainbanner /></Suspense>
      </div>
      <div className="mobileView">
        <MainbannerMobile />
      </div>
      <Container>
        <PrepareRetirement />
      </Container>
      <Container fluid={true} className="products-container">
        <div className="desktopView">
          <Products />
        </div>
        <div className="mobileView">
          <ProductsMobile />
        </div>
      </Container>
      <Container fluid={true}>
        <div className="desktopView">
          <Servies />{" "}
        </div>
        <div className="mobileView">
          <ServiesMobile />{" "}
        </div>
      </Container>
      <Suspense fallback={<Skeleton variant="rectangular" width={210} height={118} />}>
        <Recommended />
      </Suspense>
      <Suspense fallback={<Skeleton variant="rectangular" width={210} height={118} />}>
        <Testimonials />
      </Suspense>
      <Container fluid={true}>
        <Ads />
      </Container>
      <Container fluid={true}>
        <div className="desktopView">
          <Faq />
        </div>
        <div className="mobileView">
          <FaqMobile />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
