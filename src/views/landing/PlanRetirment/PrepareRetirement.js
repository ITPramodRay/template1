import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Col, Container, Row } from "reactstrap";
import CalendarCheck from "../../../assets/images/CalendarCheck.svg";

import MapPin from "../../../assets/images/MapPin.svg";
import Rerirement from "../../../assets/images/rerirement.png";
import Rocket from "../../../assets/images/Rocket.svg";

const Products = () => {
  return (
    <>
      <div className="section prepare-retirement-section">
        <Container>
          <Tabs classID="prepare-tab-block">
            <Row className=" align-items-center">
              <Col sm={6}>
                <div className="title-row">
                  <h3 className="title-text">
                    Life99 Prepares you for <br />
                    retirement
                  </h3>
                </div>

                <TabList>
                  <Tab>
                    {" "}
                    <img
                      src={CalendarCheck}
                      alt="tab-image"
                      className="img-fluid tab-image"
                    />
                    <span>Check your retirement readiness</span>
                  </Tab>
                  <Tab>
                    <img
                      src={MapPin}
                      alt="tab-image"
                      className="img-fluid tab-image"
                    />
                    <span>Track all your investments at one place</span>
                  </Tab>
                  <Tab>
                    <img
                      src={Rocket}
                      alt="tab-image"
                      className="img-fluid tab-image"
                    />
                    <span>
                      Boost your financial awareness and <br />
                      planning
                    </span>
                  </Tab>
                </TabList>
              </Col>
              <Col sm={6} className="text-center">
                <TabPanel>
                  <img
                    src={Rerirement}
                    lt="Card image cap"
                    className="img-fluid preapre-image"
                  />
                </TabPanel>
                <TabPanel>
                  <img
                    src={Rerirement}
                    lt="Card image cap"
                    className="img-fluid preapre-image"
                  />
                </TabPanel>
                <TabPanel>
                  <img
                    src={Rerirement}
                    lt="Card image cap"
                    className="img-fluid preapre-image"
                  />
                </TabPanel>
              </Col>
            </Row>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default Products;
