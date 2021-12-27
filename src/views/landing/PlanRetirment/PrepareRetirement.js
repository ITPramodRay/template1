import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Col, Container, Row } from "reactstrap";
import CalendarCheck from "../../../assets/images/CalendarCheck.svg";

import MapPin from "../../../assets/images/MapPin.svg";
import Rerirement from "../../../assets/images/rerirement.png";
import Rocket from "../../../assets/images/Rocket.svg";
import {planRetirementCms} from "../landingCMS"
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
                    {planRetirementCms.sectionHeading}
                  </h3>
                </div>

                <TabList>
                  <Tab>
                    {" "}
                    <img
                      src={planRetirementCms.point1.icon || CalendarCheck}
                      alt="point1 icon"
                      className="img-fluid tab-image"
                    />
                    <span>{planRetirementCms.point1.text}</span>
                  </Tab>
                  <Tab>
                    <img
                      src={MapPin}
                      alt="point2 icon"
                      className="img-fluid tab-image"
                    />
                    <span>{planRetirementCms.point2.text}</span>
                  </Tab>
                  <Tab>
                    <img
                      src={Rocket}
                      alt="point3 icon"
                      className="img-fluid tab-image"
                    />
                    <span>
                    {planRetirementCms.point3.text}
                    </span>
                  </Tab>
                </TabList>
              </Col>
              <Col sm={6} className="text-center">
                <TabPanel>
                  <img
                    src={planRetirementCms.point1.rightSideImage || Rerirement}
                    lt="Card image cap"
                    className="img-fluid preapre-image"
                  />
                </TabPanel>
                <TabPanel>
                  <img
                    src={planRetirementCms.point2.rightSideImage || Rerirement}
                    lt="Card image cap"
                    className="img-fluid preapre-image"
                  />
                </TabPanel>
                <TabPanel>
                  <img
                    src={planRetirementCms.point3.rightSideImage || Rerirement}
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
