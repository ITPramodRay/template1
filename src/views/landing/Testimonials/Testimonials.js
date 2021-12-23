import React from "react";
import { Col, Container, Row } from "reactstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import User1 from "../../../assets/images/user1.svg";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
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
              <div className="">
                <Container>
                  <div className="users-block">
                    <p className="saying">
                      Our entire team is on the same page and moves faster. Slite lets
                      LogDNA staff operate as a
              </p>
                    <p className="saying">
                      single team across multiple timezones and functions
              </p>
                    <div className="d-flex user-information">
                      <div className="user-image">
                        <img src={User1} alt="user" title="title" />
                      </div>
                      <div className="user-detail">
                        <p className="user-name">Ashish Kashyap</p>
                        <p className="user-position">
                          Co-Founder & CEO <br /> INDWealth
                  </p>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
              <div className="">
                <Container>
                  <div className="users-block">
                    <p className="saying">
                      Our entire team is on the same page and moves faster. Slite lets
                      LogDNA staff operate as a
              </p>
                    <p className="saying">
                      single team across multiple timezones and functions
              </p>
                    <div className="d-flex user-information">
                      <div className="user-image">
                        <img src={User1} alt="user" title="title" />
                      </div>
                      <div className="user-detail">
                        <p className="user-name">Ashish Kashyap</p>
                        <p className="user-position">
                          Co-Founder & CEO <br /> INDWealth
                  </p>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
              <div className="">
                <Container>
                  <div className="users-block">
                    <p className="saying">
                      Our entire team is on the same page and moves faster. Slite lets
                      LogDNA staff operate as a
              </p>
                    <p className="saying">
                      single team across multiple timezones and functions
              </p>
                    <div className="d-flex user-information">
                      <div className="user-image">
                        <img src={User1} alt="user" title="title" />
                      </div>
                      <div className="user-detail">
                        <p className="user-name">Ashish Kashyap</p>
                        <p className="user-position">
                          Co-Founder & CEO <br /> INDWealth
                  </p>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
              <div className="">
                <Container>
                  <div className="users-block">
                    <p className="saying">
                      Our entire team is on the same page and moves faster. Slite lets
                      LogDNA staff operate as a
              </p>
                    <p className="saying">
                      single team across multiple timezones and functions
              </p>
                    <div className="d-flex user-information">
                      <div className="user-image">
                        <img src={User1} alt="user" title="title" />
                      </div>
                      <div className="user-detail">
                        <p className="user-name">Ashish Kashyap</p>
                        <p className="user-position">
                          Co-Founder & CEO <br /> INDWealth
                  </p>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
              <div className="">
                <Container>
                  <div className="users-block">
                    <p className="saying">
                      Our entire team is on the same page and moves faster. Slite lets
                      LogDNA staff operate as a
              </p>
                    <p className="saying">
                      single team across multiple timezones and functions
              </p>
                    <div className="d-flex user-information">
                      <div className="user-image">
                        <img src={User1} alt="user" title="title" />
                      </div>
                      <div className="user-detail">
                        <p className="user-name">Ashish Kashyap</p>
                        <p className="user-position">
                          Co-Founder & CEO <br /> INDWealth
                  </p>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>

            </Carousel>;
        </div>
        </Container>
      </div>
    </>
  );
};

export default Testimonial;
