import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

const TermsCondition = () => {
  document.title = "Terms & Condition | Infinite Insights. Finite Decisions. ";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Terms & Condition" pageTitle="Pages" />
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card>
                <div className="bg-warning-subtle position-relative">
                  <CardBody className="p-5">
                    <div className="text-center">
                      <h3>Term & Conditions</h3>
                      <p className="mb-0 text-muted">
                        Last update: 16 Sept, 2022
                      </p>
                    </div>
                  </CardBody>
                  <div className="shape">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsxlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" width="1440" height="60" preserveAspectRatio="none" viewBox="0 0 1440 60">
                      <g mask="url(&quot;#SvgjsMask1001&quot;)" fill="none">
                        <path d="M 0,4 C 144,13 432,48 720,49 C 1008,50 1296,17 1440,9L1440 60L0 60z" style={{ fill: "var(--vz-secondary-bg)" }}></path>
                      </g>
                      <defs>
                        <mask id="SvgjsMask1001">
                          <rect width="1440" height="60" fill="#ffffff"></rect>
                        </mask>
                      </defs>
                    </svg>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div>
                    <h5>Terms & Conditions</h5>
                    <p class="text-muted">
                      Please read these terms and conditions ("terms and conditions", "terms") carefully before using the <a href="https://finitianalytics.com">https://finitianalytics.com</a> website (“website”, "service") operated by UNIVERSALDOT OU ("us", "we", "our").
                    </p>
                    <p class="text-muted">
                      By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly. UNIVERSALDOT OU only grants use and access of this website, its products, and its services to those who have accepted its terms.
                    </p>
                  </div>

                  <div>
                    <h5>Privacy Policy</h5>
                    <p class="text-muted">
                      Before you continue using our website, we advise you to read our privacy policy <a href="#">[link to privacy policy]</a> regarding our user data collection. It will help you better understand our practices.
                    </p>
                  </div>

                  <div>
                    <h5>Age Restriction</h5>
                    <p class="text-muted">
                      You must be at least 18 (eighteen) years of age before you can use this website. By using this website, you warrant that you are at least 18 years of age and you may legally adhere to this Agreement. UNIVERSALDOT OU assumes no responsibility for liabilities related to age misrepresentation.
                    </p>
                  </div>

                  <div>
                    <h5>Intellectual Property</h5>
                    <p class="text-muted">
                      You agree that all materials, products, and services provided on this website are the property of UNIVERSALDOT OU, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute UNIVERSALDOT OU’s intellectual property in any way, including electronic, digital, or new trademark registrations.
                    </p>
                    <p class="text-muted">
                      You grant UNIVERSALDOT OU a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.
                    </p>
                  </div>

                  <div>
                    <h5>User Accounts</h5>
                    <p class="text-muted">
                      As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.
                    </p>
                    <p class="text-muted">
                      If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.
                    </p>
                    <p class="text-muted">
                      We reserve all rights to terminate accounts, edit or remove content, and cancel orders at our sole discretion.
                    </p>
                  </div>

                  <div>
                    <h5>Applicable Law</h5>
                    <p class="text-muted">
                      By using this website, you agree that the laws of the Netherlands, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between UNIVERSALDOT OU and you, or its business partners and associates.
                    </p>
                  </div>

                  <div>
                    <h5>Disputes</h5>
                    <p class="text-muted">
                      Any dispute related in any way to your use of this website or to products you purchase from us shall be arbitrated by the appropriate court in the Netherlands, and you consent to the exclusive jurisdiction and venue of such courts.
                    </p>
                  </div>

                  <div>
                    <h5>Indemnification</h5>
                    <p class="text-muted">
                      You agree to indemnify UNIVERSALDOT OU and its affiliates and hold UNIVERSALDOT OU harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel.
                    </p>
                  </div>

                  <div>
                    <h5>Limitation on Liability</h5>
                    <p class="text-muted">
                      UNIVERSALDOT OU is not liable for any damages that may occur to you as a result of your misuse of our website.
                    </p>
                    <p class="text-muted">
                      UNIVERSALDOT OU reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between UNIVERSALDOT OU and the user, and this supersedes and replaces all prior agreements regarding the use of this website.
                    </p>
                    <p class="text-muted">
                    By using this website and its services, you explicitly accept this Agreement.
                    </p>
                  </div>

                  <div className="text-end">
                    {/* <Link to="#" className="btn btn-success me-1">
                      Accept
                    </Link>
                    <Link to="#" className="btn btn-outline-danger">
                      <i className="ri-close-line align-bottom me-1"></i>{" "}
                      Decline
                    </Link> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TermsCondition;
