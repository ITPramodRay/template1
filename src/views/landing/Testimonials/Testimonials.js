import React from "react";
import { Col, Container, Row } from "reactstrap";
import Carousel from "react-multi-carousel";
import User1 from "../../../assets/images/user1.svg";
import { testimonialCms } from "../landingCMS";
const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="section Users-section">
        <Container>
          <Row className="title-row align-items-center">
            <Col sm={12}>
              <h3 className="title-text">What our users are saying</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="m-0 users-slider">
            <Carousel
              autoPlay={false}
              arrow={true}
              containerClass="carousel-container"
              responsive={responsive}
            >
              {testimonialCms.cards.map((value, key) => {
                return (
                  <div className="" key={key}>
                    <Container>
                      <div
                        className="users-block"
                        style={{ backgroundColor: `${value.backgroundColor}` }}
                      >
                        <p className="saying">{value.saying1}</p>
                        <p className="saying">{value.saying2}</p>
                        <div className="d-flex user-information">
                          <div className="user-image">
                            <img src={User1} alt="user" title="title" />
                          </div>
                          <div className="user-detail">
                            <p className="user-name">
                              {value.userDetails.name}
                            </p>
                            <p className="user-position">
                              {value.userDetails.position} <br />{" "}
                              {value.userDetails.companyName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Testimonial;
