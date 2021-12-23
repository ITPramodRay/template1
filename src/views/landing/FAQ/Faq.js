import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { Col, Container, Row } from "reactstrap";
import {faqCms} from '../landingCMS'
const Faq = () => {
  return (
    <>
      <div className="section faq-section">
        <Container>
          <Row className="title-row align-items-center">
            <Col sm={12} className="text-center">
              <h3 className="title-text">{faqCms.sectionHeading}</h3>
            </Col>
          </Row>
          <Col sm={11} className="mx-auto">
            <Row>
              <Col sm={4}>
                <Accordion atomic={true}>
                  <AccordionItem title="What is life99?">
                    <p>
                      smallcases are modern investment
                      <br /> products that help you build a low-cost,
                      <br /> long-term & diversified portfolio easily.
                      <br /> Created by professionals, each
                      <br /> smallcase is a ready-made basket of
                      <br /> stocks/ETFs that reflects a theme,
                      <br /> strategy or objective.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="What is life99?">
                    <p>
                      smallcases are modern investment
                      <br /> products that help you build a low-cost,
                      <br /> long-term & diversified portfolio easily.
                      <br /> Created by professionals, each
                      <br /> smallcase is a ready-made basket of
                      <br /> stocks/ETFs that reflects a theme,
                      <br /> strategy or objective.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="What is life99?">
                    <p>
                      smallcases are modern investment
                      <br /> products that help you build a low-cost,
                      <br /> long-term & diversified portfolio easily.
                      <br /> Created by professionals, each
                      <br /> smallcase is a ready-made basket of
                      <br /> stocks/ETFs that reflects a theme,
                      <br /> strategy or objective.
                    </p>
                  </AccordionItem>
                </Accordion>
              </Col>

              <Col sm={4}>
                <Accordion atomic={true}>
                  <AccordionItem title="What is life99?">
                    <p>
                      smallcases are modern investment
                      <br /> products that help you build a low-cost,
                      <br /> long-term & diversified portfolio easily.
                      <br /> Created by professionals, each
                      <br /> smallcase is a ready-made basket of
                      <br /> stocks/ETFs that reflects a theme,
                      <br /> strategy or objective.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="What is life99?">
                    <p>
                      smallcases are modern investment
                      <br /> products that help you build a low-cost,
                      <br /> long-term & diversified portfolio easily.
                      <br /> Created by professionals, each
                      <br /> smallcase is a ready-made basket of
                      <br /> stocks/ETFs that reflects a theme,
                      <br /> strategy or objective.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="What is life99?">
                    <p>
                      smallcases are modern investment
                      <br /> products that help you build a low-cost,
                      <br /> long-term & diversified portfolio easily.
                      <br /> Created by professionals, each
                      <br /> smallcase is a ready-made basket of
                      <br /> stocks/ETFs that reflects a theme,
                      <br /> strategy or objective.
                    </p>
                  </AccordionItem>
                </Accordion>
              </Col>
              <Col sm={4}>
                <Accordion atomic={true}>
                  <AccordionItem title="What is life99?">
                    <p>
                      smallcases are modern investment
                      <br /> products that help you build a low-cost,
                      <br /> long-term & diversified portfolio easily.
                      <br /> Created by professionals, each
                      <br /> smallcase is a ready-made basket of
                      <br /> stocks/ETFs that reflects a theme,
                      <br /> strategy or objective.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="What is life99?">
                    <p>
                      smallcases are modern investment
                      <br /> products that help you build a low-cost,
                      <br /> long-term & diversified portfolio easily.
                      <br /> Created by professionals, each
                      <br /> smallcase is a ready-made basket of
                      <br /> stocks/ETFs that reflects a theme,
                      <br /> strategy or objective.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="What is life99?">
                    <p>
                      smallcases are modern investment
                      <br /> products that help you build a low-cost,
                      <br /> long-term & diversified portfolio easily.
                      <br /> Created by professionals, each
                      <br /> smallcase is a ready-made basket of
                      <br /> stocks/ETFs that reflects a theme,
                      <br /> strategy or objective.
                    </p>
                  </AccordionItem>
                </Accordion>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Faq;
