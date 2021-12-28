import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";




class Servicecorner extends Component {
    render() {

        return (
            <Fragment>
                <div className="section service-corner-section">
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <div className="title-row">
                                    <h3 className="title-text">Service corner</h3>
                                </div>
                            </Col>

                            <Row className="align-items-center">
                                <div className="col service-corner-box col-sm-15 text-center">
                                    <div className="service-corner-detail row">
                                        <p className="service-corner-category">Submit Life <br />Certificate</p>
                                    </div>
                                </div>

                                <div className="col service-corner-box col-sm-15 text-center">
                                    <div className="service-corner-detail row">
                                        <p className="service-corner-category">Download<br />Annuity <br />Statement</p>
                                    </div>
                                </div>
                                <div className="col service-corner-box col-sm-15 text-center">
                                    <div className="service-corner-detail row">
                                        <p className="service-corner-category">Download<br /> SuperAnnuation<br />
                                            Statement</p>
                                    </div>
                                </div>
                                <div className="col service-corner-box col-sm-15 text-center">
                                    <div className="service-corner-detail row">
                                        <p className="service-corner-category">Migrate NPS <br />account</p>
                                    </div>
                                </div>
                                <div className="col service-corner-box col-sm-15 text-center">
                                    <div className="service-corner-detail row">
                                        <p className="service-corner-category">Contribute to NPS</p>
                                    </div>
                                </div>


                            </Row>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Servicecorner;
