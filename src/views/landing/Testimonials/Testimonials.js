import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { Col, Container, Row } from "reactstrap";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import User1 from "../../../assets/images/user1.svg";

const Testimonial = () => {
  const testTimonials = [
    {
      SayingOne:
        "Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a",
      SayingTwo: "single team across multiple timezones and functions",
      TestinonialUser: "Ashish Kashyap",
      TestimonialUserPosition: "Co-Founder & CEO",
      TestimonialUserCompany: "INDWealth",
      TestimonialUserImage: User1,
    },
    {
      SayingOne:
        "Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a",
      SayingTwo: "single team across multiple timezones and functions",
      TestinonialUser: "Ashish Kashyap",
      TestimonialUserPosition: "Co-Founder & CEO",
      TestimonialUserCompany: "INDWealth",
      TestimonialUserImage: User1,
    },
    {
      SayingOne:
        "Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a",
      SayingTwo: "single team across multiple timezones and functions",
      TestinonialUser: "Ashish Kashyap2",
      TestimonialUserPosition: "Co-Founder & CEO",
      TestimonialUserCompany: "INDWealth",
      TestimonialUserImage: User1,
    },
    {
      SayingOne:
        "Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a",
      SayingTwo: "single team across multiple timezones and functions",
      TestinonialUser: "Ashish Kashyap3",
      TestimonialUserPosition: "Co-Founder & CEO",
      TestimonialUserCompany: "INDWealth",
      TestimonialUserImage: User1,
    },
    {
      SayingOne:
        "Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a",
      SayingTwo: "single team across multiple timezones and functions",
      TestinonialUser: "Ashish Kashyap",
      TestimonialUserPosition: "Co-Founder & CEO",
      TestimonialUserCompany: "INDWealth4",
      TestimonialUserImage: User1,
    },
    {
      SayingOne:
        "Our entire team is on the same page and moves faster. Slite lets LogDNA staff operate as a",
      SayingTwo: "single team across multiple timezones and functions",
      TestinonialUser: "Ashish Kashyap",
      TestimonialUserPosition: "Co-Founder & CEO",
      TestimonialUserCompany: "INDWealth5",
      TestimonialUserImage: User1,
    },
  ];

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
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
            {/* {testTimonials.map((value, index) => {
              return (
                <div className="users-block" key={index}>
                  <p className="saying">{value.SayingOne}</p>
                  <p className="saying">{value.SayingTwo}</p>
                  <div className="d-flex user-information">
                    <div className="user-image">
                      <img
                        src={value.TestimonialUserImage}
                        alt="user"
                        title="title"
                      />
                    </div>
                    <div className="user-detail">
                      <p className="user-name">{value.TestinonialUser}</p>
                      <p className="user-position">
                        {value.TestimonialUserPosition} <br />{" "}
                        {value.TestimonialUserCompany}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })} */}
            {testTimonials.map((value, index) => {
              return (
                <Card sx={{ minWidth: 275 }}>
                  <CardContent className="users-block">
                    <Typography variant="h5" component="div" className="saying">
                      {value.SayingOne}
                    </Typography>
                    <Typography variant="h5" component="div" className="saying">
                      {value.SayingTwo}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item md={6} className="user-image">
                        <img
                          src={value.TestimonialUserImage}
                          alt="user"
                          title="title"
                        />
                      </Grid>
                      <Grid item md={6} className="user-detail">
                        <p className="user-name">{value.TestinonialUser}</p>
                        <p className="user-position">
                          {value.TestimonialUserPosition} <br />{" "}
                          {value.TestimonialUserCompany}
                        </p>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              );
            })}
          </InfiniteCarousel>
        </Row>
      </div>
    </>
  );
};

export default Testimonial;
