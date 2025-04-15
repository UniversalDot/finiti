import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import CountUp from "react-countup";
import { useSelector, useDispatch } from "react-redux";
import { AudiencesCharts } from './DashboardAnalyticsCharts';
import { getAudiencesMetricsChartsData } from "../../slices/thunks";
import { createSelector } from 'reselect';

const AudiencesMetrics = () => {

    const dispatch = useDispatch();

    const [chartData, setchartData] = useState([]);

    const audiencesData = createSelector(
        (state) => state.DashboardAnalytics,
        (audiencesMetricsData) => audiencesMetricsData.audiencesMetricsData
      );
    // Inside your component
    const audiencesMetricsData = useSelector(audiencesData);

    useEffect(() => {
        setchartData(audiencesMetricsData);
    }, [audiencesMetricsData]);

    const onChangeChartPeriod = pType => {
        dispatch(getAudiencesMetricsChartsData(pType));
    };

    useEffect(() => {
        dispatch(getAudiencesMetricsChartsData("yearly"));
    }, [dispatch]);


    return (
        <React.Fragment>
            <Col xl={8}>
                <Card>
                    <CardHeader className="border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Bitcoin Transactions</h4>
                        <div className="d-flex gap-1">
                            {/* <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("all"); }}>
                                ALL
                            </button>
                            <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("monthly"); }}>
                                1M
                            </button>
                            <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("halfyearly"); }}>
                                6M
                            </button> */}
                            <button type="button" className="btn btn-soft-primary btn-sm" onClick={() => { onChangeChartPeriod("yearly"); }}>
                                1Y
                            </button>
                        </div>
                    </CardHeader>
                    <CardHeader className="p-0 border-0 bg-light-subtle">
                        <Row className="g-0 text-center">
                            <Col xs={6} sm={4}>
                                <div className="p-3 border border-dashed border-start-0">
                                    <h5 className="mb-1"><span className="counter-value" data-target="854">
                                        <CountUp
                                            start={0}
                                            end={16.02}
                                            duration={3}
                                        />
                                    </span>M
                                        <span className="text-success ms-1 fs-12">4%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
                                    </h5>
                                    <p className="text-muted mb-0">Avg. Transactions/Year</p>
                                </div>
                            </Col>
                            <Col xs={6} sm={4}>
                                <div className="p-3 border border-dashed border-start-0">
                                    <h5 className="mb-1"><span className="counter-value" data-target="1278">
                                        <CountUp
                                            start={0}
                                            end={19}
                                            duration={3}
                                            separator=","
                                        />
                                    </span>T
                                        <span className="text-success ms-1 fs-12">118.4%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
                                    </h5>
                                    <p className="text-muted mb-0">Total value transferred (in USD)</p>
                                </div>
                            </Col>
                            <Col xs={6} sm={4}>
                                <div className="p-3 border border-dashed border-start-0 border-end-0">
                                    <h5 className="mb-1"><span className="counter-value" data-target="3">
                                    </span> <span className="counter-value" data-target="40">
                                            <CountUp
                                                start={0}
                                                end={120}
                                                duration={3}
                                            />
                                        </span> TWh
                                        <span className="text-success ms-1 fs-12">37%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
                                    </h5>
                                    <p className="text-muted mb-0">Avg. Energy Use/Year</p>
                                </div>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody className="p-0 pb-2">
                        <div>
                            <AudiencesCharts series={chartData} dataColors='["--vz-primary", "--vz-light"]' />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default AudiencesMetrics;