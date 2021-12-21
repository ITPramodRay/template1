import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";

import Google from "../../../assets/images/Google.svg";
import Appstore from "../../../assets/images/Apple.svg";
import Planstore from "../../../assets/images/Planapp.svg";
import Curve from "../../../assets/images/Curve.svg";

class Ads extends Component {
  render() {
    return (
      <Fragment>
        <div className="section retirment-section">
          <Container className="retirement-container">
            <Row className="title-row retirment-row  align-items-center">
              <Col sm={8} className="mx-auto">
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
      </Fragment>
    );
  }
}

export default Ads;
