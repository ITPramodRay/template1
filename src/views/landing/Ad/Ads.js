import React from "react";
import { Col, Container, Row } from "reactstrap";
import Appstore from "../../../assets/images/Apple.svg";
import Curve from "../../../assets/images/Curve.svg";
import Google from "../../../assets/images/Google.svg";
import Planstore from "../../../assets/images/Planapp.svg";

const Ads = () => {
  return (
    <>
      <div className="section retirment-section">
        <Container className="retirement-container">
          <Row className="title-row retirment-row  align-items-center">
            <Col sm={8} lg={8} className="mx-auto">
              <img
                src={Curve}
                alt="Curve"
                title="Curve"
                className="Curve-image "
              ></img>
              <h3 className="title-text">
                Plan your <br />
                retirement well
              </h3>
              <div className="download-application">
                <p className="text-white">Download the App</p>
                <a>
                  <img
                    src={Appstore}
                    alt="apple store"
                    title="apple store"
                  ></img>
                </a>
                <a>
                  <img
                    src={Google}
                    alt="google store"
                    title="google store"
                  ></img>
                </a>
              </div>
            </Col>
          </Row>
          <img
            src={Planstore}
            alt="apple store"
            title="apple store"
            className="plan-store-image "
          ></img>
        </Container>
      </div>
    </>
  );
};

export default Ads;
