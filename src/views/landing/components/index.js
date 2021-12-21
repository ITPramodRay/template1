import React, { Component, Fragment } from 'react';
import { Container} from 'reactstrap';



// Files 
import Mainbanner from "../AppBanner/Mainbanner";
// import PrepareRetirement from "./PrepareRetirement";
// import Products from "./Products";
// import Servies from "./Services";
// import Recommended from "./Recommended";
// import Retirement from "./Retirement";
import Faq from "../FAQ/Faq";
// import Footer from "./Footer";
// import Users from "./Users";


const Homepage = () => {
  
    return (
      <Fragment>
        <Mainbanner/>
        {/* <Container>
          <PrepareRetirement />
        </Container>
        <Container fluid={true} className='products-container'>
          <Products />
        </Container>
        <Container fluid={true}>
          <Servies />
        </Container>
        <Recommended />
        <Users />
        <Container fluid={true}>
          <Retirement />
        </Container> */}
        <Container fluid={true}>
          <Faq />
        </Container>

        {/* <Footer /> */}




      </Fragment >

    );
  
}

export default Homepage;
