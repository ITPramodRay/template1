import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "reactstrap";

import Nps from "../../../assets/images/nps.svg";
import Annuity from "../../../assets/images/Annuity.svg";
import Ppf from "../../../assets/images/ppf.svg";
import Mutualfund from "../../../assets/images/mutualfunds.svg";
import Maturitybenifit from "../../../assets/images/MaturityBenefit.svg";
import Insurance from "../../../assets/images/insurance.svg";
import Equity from "../../../assets/images/equity.svg";
import Comingsoon from "../../../assets/images/comingsoon.svg";

class Products extends Component {
  render() {
    return (
      <Fragment>
        <div className="section products-section">
          <Container>
            <Row className="title-row align-items-center">
              <Col sm={10}>
                <h3 className="title-text">
                  Range of investment
                  <br /> products for all your needs
                </h3>
              </Col>
              <Col sm={2} className="text-right">
                <Button className="explore-btn">Explore Now</Button>
              </Col>
            </Row>

            <Row className="align-items-center">
              <div className="col products-box col-sm-15 text-center">
                <div className="products-detail">
                  <img
                    src={Nps}
                    className="product-img"
                    alt="skype"
                    title="skype"
                  />
                  <p className="products-category">NPS</p>
                </div>
              </div>

              <div className="col products-box col-sm-15 text-center">
                <div className="products-detail">
                  <img
                    src={Annuity}
                    className="product-img"
                    alt="skype"
                    title="skype"
                  />
                  <p className="products-category">Annuity</p>
                </div>
              </div>
              <div className="col products-box col-sm-15 text-center">
                <div className="products-detail">
                  <img
                    src={Ppf}
                    className="product-img"
                    alt="skype"
                    title="skype"
                  />
                  <p className="products-category">PPF</p>
                </div>
              </div>
              <div className="col products-box col-sm-15 text-center">
                <div className="products-detail">
                  <img
                    src={Mutualfund}
                    className="product-img"
                    alt="skype"
                    title="skype"
                  />
                  <p className="products-category">Mutual funds</p>
                </div>
              </div>
              <div className="col products-box col-sm-15 text-center">
                <div className="products-detail">
                  <img
                    src={Comingsoon}
                    className="comingsoon-img"
                    alt="Coming soon"
                    title="Coming soon"
                  />
                  <img
                    src={Maturitybenifit}
                    className="product-img"
                    alt="skype"
                    title="skype"
                  />
                  <p className="products-category">Maturity Benifit</p>
                </div>
              </div>
              <div className="col products-box col-sm-15 text-center">
                <div className="products-detail">
                  <img
                    src={Comingsoon}
                    className="comingsoon-img"
                    alt="Coming soon"
                    title="Coming soon"
                  />
                  <img
                    src={Insurance}
                    className="product-img"
                    alt="skype"
                    title="skype"
                  />
                  <p className="products-category">Term Insurance</p>
                </div>
              </div>
              <div className="col products-box col-sm-15 text-center">
                <div className="products-detail">
                  <img
                    src={Comingsoon}
                    className="comingsoon-img"
                    alt="Coming soon"
                    title="Coming soon"
                  />
                  <img
                    src={Equity}
                    className="product-img"
                    alt="skype"
                    title="skype"
                  />
                  <p className="products-category">Equity</p>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Products;
