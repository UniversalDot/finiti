import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CountUp from "react-countup";

//Import Icons
import FeatherIcon from "feather-icons-react";

const Widget = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Total Cryptocurrency Users</p>
                                    <h2 className="mt-4 fs-22 ff-secondary fw-semibold">
                                        <span className="counter-value">
                                            <CountUp
                                                start={500}
                                                end={560}
                                                separator=","
                                                duration={4}
                                            />
                                            </span>M</h2>
                                    <p className="mb-0 text-muted text-truncate"><span className="badge bg-light text-success mb-0">
                                        <i className="ri-arrow-up-line align-middle"></i> 2.24 %
                                    </span> vs. previous month</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-info-subtle rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="users"
                                                className="text-info"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Bitcoin Daily Active Users</p>
                                    <h2 className="mt-4 fs-22 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="97.66">
                                            <CountUp
                                                start={0}
                                                end={850.000}
                                                separator=","
                                                duration={4}
                                            />
                                        </span>k</h2>
                                    <p className="mb-0 text-muted text-truncate"><span className="badge bg-light text-success mb-0">
                                        <i className="ri-arrow-up-line align-middle"></i> 3.96 %
                                    </span> vs. previous month</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-info-subtle rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="users"
                                                className="text-info"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Monthly Active Users</p>
                                    <h2 className="mt-4 fs-22 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="3">
                                            <CountUp
                                                 start={0}
                                                 end={60}
                                                 duration={2}
                                                //  decimals={0}
                                            />
                                        </span>{"M"}
                                        </h2>
                                    <p className="mb-0 text-muted text-truncate"><span className="badge bg-light text-success mb-0">
                                        <i className="ri-arrow-up-line align-middle"></i> 4.54 %
                                    </span> vs. previous month</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-info-subtle rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="users"
                                                className="text-info"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Avg. Daily Trading Volume</p>
                                    <h2 className="mt-4 fs-22 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="33.48">
                                            <CountUp
                                                start={0}
                                                end={146.00}
                                                // decimals={2}
                                                prefix="$"
                                                duration={4}
                                            />
                                        </span>B</h2>
                                    <p className="mb-0 text-muted text-truncate"><span className="badge bg-light text-danger mb-0">
                                        <i className="ri-arrow-down-line align-middle"></i> 27.30 %
                                    </span> vs. previous quarter</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-info-subtle rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="activity"
                                                className="text-info"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            <Row>
                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Avg. Bitcoin Transaction Fee</p>
                                    <h2 className="mt-4 fs-22 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="3">
                                            <CountUp
                                                 start={0}
                                                 end={1.75}
                                                 duration={2}
                                                 prefix="$"
                                                 decimals={2}
                                            />
                                        </span>{" "}
                                        </h2>
                                    <p className="mb-0 text-muted text-truncate"><span className="badge bg-light text-danger mb-0">
                                        <i className="ri-arrow-down-line align-middle"></i> 0.24 %
                                    </span> vs. previous month</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-info-subtle rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="dollar-sign"
                                                className="text-info"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Avg. Ethereum Gas Price</p>
                                    <h2 className="mt-4 fs-22 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="33.48">
                                            <CountUp
                                                start={0}
                                                end={2.430}
                                                decimals={2}
                                                duration={4}
                                            />
                                        </span> Gwei</h2>
                                    <p className="mb-0 text-muted text-truncate"><span className="badge bg-light text-success mb-0">
                                        <i className="ri-arrow-up-line align-middle"></i> 7.05 %
                                    </span> vs. previous month</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-info-subtle rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="activity"
                                                className="text-info"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Widget;