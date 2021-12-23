import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { Col, Container, Row } from "reactstrap";

import User1 from "../../../assets/images/user1.svg";
import { testimonialCms } from "../landingCMS";

const Testimonial = () => {
  return (
    <>
      <div className="section Users-section">
        <Container>
          <Row className="title-row align-items-center">
            <Col sm={12}>
              <h3 className="title-text">{testimonialCms.sectionHeading}</h3>
            </Col>
          </Row>
        </Container>

        <Row className="m-0 users-slider">
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 1366,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ]}
            dots={false}
            showSides={true}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={1}
            slidesToShow={3}
            scrollOnDevice={true}
          >
            {" "}
            {testimonialCms.cards.map((value, key) => (
              <div key={key} className="users-block" style={{backgroundColor: `${value.backgroundColor}`}}>
                <p className="saying">
                 {value.saying1}
                </p>
                <p className="saying">
                  {value.saying2}
                </p>
                <div className="d-flex user-information">
                  <div className="user-image">
                    <img src={User1} alt="user" title="title" />
                  </div>
                  <div className="user-detail">
                    <p className="user-name">{value.userDetails.name}</p>
                    <p className="user-position">
                      Co-Founder & CEO <br /> INDWealth
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </InfiniteCarousel>
        </Row>
      </div>
    </>
  );
};

export default Testimonial;
