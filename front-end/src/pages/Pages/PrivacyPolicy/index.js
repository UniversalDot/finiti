import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import FeatherIcon from "feather-icons-react";

const PrivacyPolicy = () => {
  document.title = "Privacy Policy | Infinite Insights. Finite Decisions. ";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Privacy Policy" pageTitle="Pages" />
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card>
                <div className="bg-primary-subtle position-relative">
                  <CardBody className="p-5">
                    <div className="text-center">
                      <h3>Privacy Policy</h3>
                      <p className="mb-0 text-muted">
                        Last update: 16 April, 2025
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
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        icon="check-circle"
                        className="text-success icon-dual-success icon-xs"
                      />
                    </div>
                    {/* <div className="flex-grow-1">
                      <h5>Privacy Policy for velzon</h5>
                      <p className="text-muted">
                        At Website Name, accessible at Website.com, one of our
                        main priorities is the privacy of our visitors. This
                        Privacy Policy document contains types of information
                        that is collected and recorded by Website Name and how
                        we use it.
                      </p>
                      <p className="text-muted">
                        If you have additional questions or require more
                        information about our Privacy Policy, do not hesitate to
                        contact us through email at Email@Website.com
                      </p>
                      <p className="text-muted">
                        This privacy policy applies only to our online
                        activities and is valid for visitors to our website with
                        regards to the information that they shared and/or
                        collect in Website Name. This policy is not applicable
                        to any information collected offline or via channels
                        other than this website.
                      </p>
                      <p className="text-muted">How we use your information:</p>
                      <ul className="text-muted">
                        <li>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                          </p>
                        </li>
                        <li>
                          <p>
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text. All the
                            Lorem Ipsum generators on the Internet tend to
                            repeat predefined chunks as necessary, making this
                            the first true generator on the Internet.
                          </p>
                        </li>
                        <li>
                          <p>
                            On the other hand, we denounce with righteous
                            indignation and dislike men who are so beguiled and
                            demoralized by the charms of pleasure of the moment.
                          </p>
                        </li>
                        <li>
                          <p>
                            It uses a dictionary of over 200 Latin words,
                            combined with a handful of model sentence
                            structures, to generate Lorem Ipsum which looks
                            reasonable. The generated Lorem Ipsum is therefore
                            always free from repetition, injected humour, or
                            non-characteristic words etc.
                          </p>
                        </li>
                      </ul>
                    </div> */}


                    <div class="flex-grow-1">
                      <h5>Privacy Policy</h5>
                      <p class="text-muted">
                        This Privacy Policy describes the policies of UNIVERSALDOT OÜ, Kesklinna linnaosa, Ahtri tn 12, Harju maakond 15551, Estonia, email: info@universaldot.foundation, on the collection, use, and disclosure of your information that we collect when you use our website (<a href="https://finitianalytics.com/">https://finitianalytics.com/</a>). By accessing or using the Service, you consent to the collection, use, and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service.
                      </p>
                      <p class="text-muted">
                        We may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service, and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page.
                      </p>
                      
                      <p class="text-muted">Information We Collect:</p>
                      <ul class="text-muted">
                        <li>Name</li>
                        <li>Email</li>
                      </ul>
                      <p class="text-muted">How We Use Your Information:</p>
                      <ul class="text-muted vstack gap-2">
                        <li>Enforce Terms & Conditions</li>
                        <li>Administrative purposes</li>
                      </ul>
                      <p class="text-muted">
                        If we want to use your information for any other purpose, we will ask you for consent and will use your information only upon receiving your consent and then, only for the purpose(s) for which consent was granted unless required otherwise by law.
                      </p>
                      <p class="text-muted">
                        We will retain your personal information with us for 90 days to 2 years after users terminate their accounts or as long as necessary to fulfill the purposes detailed in this Privacy Policy. Residual anonymous and aggregate information, neither of which identifies you (directly or indirectly), may be stored indefinitely.
                      </p>
                      <p class="text-muted">
                        Your Rights: Depending on applicable law, you may have rights including access, rectification, erasure, data portability, restriction or objection to processing, and withdrawing consent. To exercise these rights, contact us at info@universaldot.foundation. We will respond according to applicable law.
                      </p>
                      <p class="text-muted">
                        For information about our use of cookies and related technologies, please refer to our Cookie Policy.
                      </p>
                      <p class="text-muted">
                        We use reasonable security measures to protect your information but cannot guarantee absolute security. Transmit data at your own risk.
                      </p>
                      <p class="text-muted">
                        Our Service may contain links to third-party websites whose privacy practices we do not control. Review the privacy policies of these websites separately.
                      </p>
                      <p class="text-muted">
                        If you have queries or concerns, email our Grievance Officer at info@universaldot.foundation. We will address your concerns in accordance with applicable law.
                      </p>
                    </div>
                  </div>

                  {/* <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        icon="check-circle"
                        className="text-success icon-dual-success icon-xs"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5>How we use your information</h5>
                      <p className="text-muted">
                        If you contact us directly, we may receive additional
                        information about you such as your name, email address,
                        phone number, the contents of the message and/or
                        attachments you may send us, and any other information
                        you may choose to provide.
                      </p>
                      <p className="text-muted">
                        Communicate with you, either directly or through one of
                        our partners, including for customer service, to provide
                        you with updates and other information relating to the
                        website, and for marketing and promotional purposes.
                      </p>
                      <p className="text-muted">
                        When you register for an Account, we may ask for your
                        contact information, including items such as name,
                        company name, address, email address, and telephone
                        number.
                      </p>
                      <p className="text-muted">
                        We use the information we collect in various ways,
                        including to:
                      </p>
                      <ul className="text-muted vstack gap-2">
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>
                          Develop new products, services, features, and
                          functionality
                        </li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                      </ul>
                      <p className="text-muted">
                        Like any other website, Website Name uses ‘cookies'.
                        These cookies are used to store information including
                        visitors' preferences, and the pages on the website that
                        the visitor accessed or visited. The information is used
                        to optimize the users' experience by customizing our web
                        page content based on visitors' browser type and/or
                        other information.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        icon="check-circle"
                        className="text-success icon-dual-success icon-xs"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-muted">
                        Some of advertisers on our site may use cookies and web
                        beacons. Our advertising partners are listed below. Each
                        of our advertising partners has their own Privacy Policy
                        for their policies on user data. For easier access, we
                        hyperlinked to their Privacy Policies below.
                      </p>
                      <p className="text-muted">
                        <b>
                          Website Name's Privacy Policy does not apply to other
                          advertisers or websites. Thus, we are advising you to
                          consult the respective Privacy Policies of these
                          third-party ad servers for more detailed information.
                          It may include their practices and instructions about
                          how to opt-out of certain options. You may find a
                          complete list of these Privacy Policies and their
                          links here: Privacy Policy Links.
                        </b>
                      </p>
                    </div>
                  </div> */}

                  <div className="text-end">
                    {/* <Link to="#!" className="btn btn-secondary">
                      I'm Understand
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

export default PrivacyPolicy;
