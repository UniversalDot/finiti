import React, { useState, useMemo, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Row,
  Table,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import img6 from "../../../assets/images/companies/img-6.png";
import { jobCompanies } from "../../../common/data/appsJobs";
import Pagination from "../../../Components/Common/Pagination";

const CompaniesList = () => {
  document.title = "Companies | Infinite Insights. Finite Decisions. ";

  const [data, setData] = useState([])
  const [isToggle, setIsToogle] = useState(false)

  const [companiesList, setCompaniesList] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  //pagination
  const perPageData = 16;
  const indexOfLast = currentPage * perPageData;
  const indexOfFirst = indexOfLast - perPageData;
  const currentdata = useMemo(() => jobCompanies?.slice(indexOfFirst, indexOfLast), [indexOfFirst, indexOfLast])

  useEffect(() => {
    setCompaniesList(currentdata)
  }, [currentdata]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className="container-fluid">
          <BreadCrumb title="Companies" pageTitle="Job" />
          <Row>
            <Col xxl={9}>
              <Card>
                <CardBody>
                  <Form>
                    <Row className="g-3">
                      <Col xxl={5} sm={6}>
                        <div className="search-box">
                          <Input
                            type="text"
                            className="form-control search bg-light border-light"
                            id="searchCompany"
                            placeholder="Search for company, industry type..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </Col>

                      <Col xxl={3} sm={6}>
                        <Flatpickr
                          className="form-control border-light bg-light"
                          id="datepicker-publish-input"
                          placeholder="Select a date"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "multiple",
                            dateFormat: "d.m.y",
                          }}
                        />
                      </Col>

                      <Col xxl={2} sm={4}>
                        <div className="input-light">
                          <select
                            className="form-control choices__inner"
                            name="choices-single-default"
                            id="idType"
                          >
                            <option value="all" defaultValue>
                              All
                            </option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Intership">Intership</option>
                            <option value="Freelance">Freelance</option>
                          </select>
                        </div>
                      </Col>

                      <Col xxl={2} sm={4}>
                        <button
                          type="button"
                          className="btn btn-secondary w-100"
                        >
                          <i className="ri-equalizer-fill me-1 align-bottom"></i>{" "}
                          Filters
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>

              <Row className="job-list-row" id="companies-list">
                {(companiesList || []).map((item, key) => (
                  <Col xxl={3} md={6} key={key}>
                    <Card className="card companiesList-card">
                      <CardBody>
                        <div className="avatar-sm mx-auto">
                          <div className="avatar-title bg-light rounded">
                            <img
                              src={item.image_src}
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <Link to="#">
                            <h5 className="mt-3 company-name">{item.lable}</h5>
                          </Link>
                          <div className="d-none company-desc">
                            {item.company_info}
                          </div>
                          <p className="text-muted industry-type">
                            {item.industry_type}
                          </p>
                          <div className="d-none">
                            <span className="employee">{item.employee}</span>
                            <span className="location">{item.location}</span>
                            <span className="rating">{item.rating}</span>
                            <span className="website">{item.website}</span>
                            <span className="email">{item.email}</span>
                            <span className="since">{item.since}</span>
                          </div>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                          >
                            <span className="vacancy">{item.vacancy}</span> Jobs
                            Available
                          </button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>


              <Pagination
                perPageData={perPageData}
                data={jobCompanies}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
            </Col>
            <Col xxl={3}>
              <Card id="company-overview">
                <CardBody>
                  <div className="avatar-lg mx-auto mb-3">
                    <div className="avatar-title bg-light rounded">
                      <img
                        src={img6}
                        alt=""
                        className="avatar-sm company-logo"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <NavLink to="#!">
                      <h5 className="overview-companyname">
                        Syntyce Solutions
                      </h5>
                    </NavLink>
                    <p className="text-muted overview-industryType">
                      IT Department
                    </p>

                    <ul className="list-inline mb-0">
                      <li className="list-inline-item avatar-xs">
                        <NavLink
                          to=""
                          className="avatar-title bg-success-subtle text-success fs-15 rounded"
                        >
                          <i className="ri-global-line"></i>
                        </NavLink>
                      </li>
                      <li className="list-inline-item avatar-xs">
                        <NavLink
                          to=""
                          className="avatar-title bg-danger-subtle text-danger fs-15 rounded"
                        >
                          <i className="ri-mail-line"></i>
                        </NavLink>
                      </li>
                      <li className="list-inline-item avatar-xs">
                        <NavLink
                          to=""
                          className="avatar-title bg-warning-subtle text-warning fs-15 rounded"
                        >
                          <i className="ri-question-answer-line"></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </CardBody>

                <CardBody>
                  <h6 className="text-muted text-uppercase fw-semibold mb-3">
                    Information
                  </h6>
                  <p className="text-muted mb-4 overview-companydesc">
                    The IT department of NavLink company ensures that the
                    network of computers within the organisation are
                    well-connected and functioning properly. All the other
                    departments within the company rely on them to ensure that
                    their respective functions can go on seamlessly.
                  </p>

                  <div className="table-responsive table-card">
                    <Table className="table table-borderless mb-4">
                      <tbody>
                        <tr>
                          <td className="fw-semibold">Industry Type</td>
                          <td className="overview-industryType">
                            Chemical Industries
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Location</td>
                          <td className="overview-company_location">
                            Damascus, Syria
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Employee</td>
                          <td className="overview-employee">10-50</td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Vacancy</td>
                          <td className="overview-vacancy">23</td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Rating</td>
                          <td>
                            <span className="overview-rating">4.8</span>{" "}
                            <i className="ri-star-fill text-warning align-bottom"></i>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Website</td>
                          <td>
                            <NavLink
                              to=""
                              className="link-primary text-decoration-underline overview-website"
                            >
                              www.syntycesolution.com
                            </NavLink>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Contact Email</td>
                          <td className="overview-email">
                            info@syntycesolution.com
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">Since</td>
                          <td className="overview-since">1995</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                  <div className="hstack gap-3">
                    <button
                      type="button"
                      className={`${isToggle ? "btn btn-soft-success custom-toggle w-100 active" : "btn btn-soft-success custom-toggle w-100"}`}
                      data-bs-toggle="button"
                      onClick={() => setIsToogle(!isToggle)}
                    >
                      <span className="icon-on">
                        <i className="ri-add-line align-bottom me-1"></i> Follow
                      </span>
                      <span className="icon-off">
                        <i className="ri-user-unfollow-line align-bottom me-1"></i>{" "}
                        Unfollow
                      </span>
                    </button>
                    <NavLink to="#" className="btn btn-primary w-100">
                      More View{" "}
                      <i className="ri-arrow-right-line align-bottom"></i>
                    </NavLink>
                  </div>
                </CardBody>
              </Card>

              <Card className="overflow-hidden shadow-none">
                <CardBody className="bg-danger-subtle">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar-sm">
                        <div className="avatar-title bg-danger-subtle text-danger rounded-circle fs-17">
                          <i className="ri-gift-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h6 className="fs-16 fw-bold">Free trial</h6>
                      <p className="text-muted mb-0">28 days left</p>
                    </div>
                    <div>
                      <NavLink to="/pages-pricing" className="btn btn-danger">
                        Upgrade
                      </NavLink>
                    </div>
                  </div>
                </CardBody>
                <CardBody className="bg-danger-subtle border-top border-danger border-opacity-25 border-top-dashed">
                  <NavLink
                    to="#"
                    className="d-flex justify-content-between align-items-center text-body"
                  >
                    <span>See benefits</span>
                    <i className="ri-arrow-right-s-line fs-18"></i>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CompaniesList;
