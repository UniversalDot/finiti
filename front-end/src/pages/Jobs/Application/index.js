import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Nav,
  NavItem,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalBody,
  Label,
  Button,
  NavLink
} from "reactstrap";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import DeleteModal from "../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { useSelector, useDispatch } from "react-redux";
import { getApplicationList } from "../../../slices/thunks";
import TableContainer from "../../../Components/Common/TableContainer";
import { Link } from "react-router-dom";
import {
  AppId,
  Designation,
  Contact,
  Status,
  Type,
} from "./ApplicationCol";
import MultiUser from "../../../assets/images/users/multi-user.jpg";
import { createSelector } from "reselect";
const Application = () => {
  document.title = "Application | Infinite Insights. Finite Decisions. ";

  const option = [
    {
      options: [
        { label: "Status", value: "Status" },
        { label: "Approved", value: "Approved" },
        { label: "New", value: "New" },
        { label: "Pending", value: "Pending" },
        { label: "Rejected", value: "Rejected" },
      ],
    },
  ];

  const option1 = [
    {
      options: [
        { label: "Select Options", value: "Select Options" },
        { label: "Full Time", value: "Full Time" },
        { label: "Part Time", value: "Part Time" },
      ],
    },
  ];

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [application, setApplication] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const onClickDelete = (order) => {
    setDeleteModal(true);
  };

  const selectapplistData = createSelector(
    (state) => state.Jobs,
    (appList) => appList.appList
  );
  // Inside your component
  const appList = useSelector(selectapplistData);

  useEffect(() => {
    dispatch(getApplicationList());
  }, [dispatch]);

  const handleApplicationClick = useCallback((arg) => {
    const application = arg;

    setApplication({
      _id: application.id,
      company: application.company,
      Designation: application.Designation,
      date: application.date,
      contact: application.contact,
      type: application.type,
      status: application.status,
    });
  });
  const hadleApplicationClicks = () => {
    setApplication("");
  };

  const columns = useMemo(
    () => [
      {
        header: <input type="checkbox" className="form-check-input" id="checkBoxAll" />,
        cell: (cell) => {
          return <input type="checkbox" className="orderCheckBox form-check-input" value={cell.getValue()} />;
        },
        id: '#',
        accessorKey: "_id",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "Application ID",
        accessorKey: "id",
        enableColumnFilter: false,
        cell: (cell) => {
          return <AppId {...cell} />;
        },
      },
      {
        header: "COMPANY NAME",
        accessorKey: "company",
        enableColumnFilter: false,
        cell: (cell) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img
                  src={cell.getValue()[0]}
                  alt=""
                  className="avatar-xxs rounded-circle image_src object-fit-cover"
                />
              </div>
              <div className="flex-grow-1 ms-2 ">
                {cell.getValue()[1]}
              </div>
            </div>
          </>
        ),
      },
      {
        header: "Designation",
        accessorKey: "designation",
        enableColumnFilter: false,
        cell: (cell) => {
          return <Designation {...cell} />;
        },
      },
      {
        header: "Apply Date",
        accessorKey: "date",
        enableColumnFilter: false,
        cell: (cell) => <>{cell.getValue()} </>,
      },
      {
        header: "Contact",
        accessorKey: "contacts",
        enableColumnFilter: false,
        cell: (cell) => {
          return <Contact {...cell} />;
        },
      },
      {
        header: "Type",
        accessorKey: "type",
        enableColumnFilter: false,
        cell: (cell) => {
          return <Type {...cell} />;
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        enableColumnFilter: false,
        cell: (cell) => {
          return <Status {...cell} />;
        },
      },
      {
        header: "Action",
        enableColumnFilter: false,
        cell: (cell) => {
          return (
            <div className="d-flex gap-3">
              <Link
                to="/apps-job-details"
                className="text-primary d-inline-block"
              >
                <i className="ri-eye-fill fs-16"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="edittooltip">
                View
              </UncontrolledTooltip>
              <Link
                to="#"
                onClick={() => {
                  const data = cell.row.original;
                  handleUpdateApplicationClick(data);
                }}
                className="text-success"
              >
                <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
                <UncontrolledTooltip placement="top" target="edittooltip">
                  Edit
                </UncontrolledTooltip>
              </Link>
              <Link
                to="#"
                className="text-danger"
                onClick={() => {
                  const orderData = cell.row.original;
                  onClickDelete(orderData);
                }}
              >
                <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
                <UncontrolledTooltip placement="top" target="deletetooltip">
                  Delete
                </UncontrolledTooltip>
              </Link>
            </div>
          );
        },
      },
    ],
    []
  );
  return (
    <React.Fragment>
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onCloseClick={() => setDeleteModal(false)}
        />
        <DeleteModal
          show={deleteModalMulti}
          onDeleteClick={() => {
            setDeleteModalMulti(false);
          }}
          onCloseClick={() => setDeleteModalMulti(false)}
        />
        <Container fluid>
          <BreadCrumb title="Application" pageTitle="Jobs" />
          <Row>
            <Col>
              <Card>
                <CardHeader className="border-0">
                  <div className="d-md-flex align-items-center">
                    <h5 className="card-title mb-3 mb-md-0 flex-grow-1">
                      Job Application
                    </h5>
                    <div className="flex-shrink-0">
                      <div className="d-flex gap-1 flex-wrap">
                        <Button
                          color="primary"
                          type="button"
                          className="add-btn"
                          data-bs-toggle="modal"
                          id="create-btn"
                          data-bs-target="#showModal"
                        >
                          <i className="ri-add-line align-bottom me-1"></i>{" "}
                          Create Application
                        </Button>
                        <Button color="secondary" type="button">
                          <i className="ri-file-download-line align-bottom me-1"></i>{" "}
                          Import
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="border border-dashed border-end-0 border-start-0">
                  <Form>
                    <Row className="g-3">
                      <Col xxl={5} sm={6}>
                        <div className="search-box">
                          <Input
                            type="text"
                            className="form-control search"
                            placeholder="Search for application ID, company, designation status or something..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </Col>
                      <Col xxl={2} sm={6}>
                        <div>
                          <Flatpickr
                            className="form-control"
                            id="datepicker-publish-input"
                            placeholder="Select date"
                            options={{
                              altInput: true,
                              altFormat: "F j, Y",
                              mode: "multiple",
                              dateFormat: "d.m.y",
                            }}
                          />
                        </div>
                      </Col>
                      <Col xxl={2} sm={4}>
                        <div>
                          <Select
                            options={option}
                            name="choices-single-default"
                            id="idStatus"
                          ></Select>
                        </div>
                      </Col>
                      <Col xxl={2} sm={4}>
                        <div>
                          <Select
                            options={option1}
                            name="choices-single-default"
                            id="idType"
                          ></Select>
                        </div>
                      </Col>
                      <Col xxl={1} sm={4}>
                        <div>
                          <Button
                            type="button"
                            color="success"
                            className="btn w-100"
                          // onclick=""
                          >
                            {" "}
                            <i className="ri-equalizer-fill me-1 align-bottom"></i>
                            Filters
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardBody className="pt-0">
                  <div>
                    <Nav
                      className="nav nav-tabs nav-tabs-custom nav-success mb-3"
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className="active All py-3"
                          data-bs-toggle="tab"
                          id="All"
                          to="#"
                          role="tab"
                          aria-selected="true"
                        >
                          All Application
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className="py-3 New"
                          data-bs-toggle="tab"
                          id="New"
                          to="#"
                          role="tab"
                          aria-selected="false"
                        >
                          New
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className="py-3 Pending"
                          data-bs-toggle="tab"
                          id="Pending"
                          to="#"
                          role="tab"
                          aria-selected="false"
                        >
                          Pending{" "}
                          <span className="badge bg-danger align-middle ms-1">
                            2
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className="py-3 Approved"
                          data-bs-toggle="tab"
                          id="Approved"
                          to="#"
                          role="tab"
                          aria-selected="false"
                        >
                          Approved
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className="py-3 Rejected"
                          data-bs-toggle="tab"
                          id="Rejected"
                          to="#"
                          role="tab"
                          aria-selected="false"
                        >
                          Rejected
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TableContainer
                      columns={columns}
                      data={appList || []}
                      hadleApplicationClick={hadleApplicationClicks}
                      customPageSize={8}
                      divClass="table-responsive table-card mb-1"
                      tableClass="align-middle table-nowrap"
                      theadClass="table-light text-muted"
                    />
                  </div>
                  <div
                    className="modal fade"
                    id="showModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <Modal
                        isOpen={show}
                        toggle={handleClose}
                        centered={true}
                        className="modal-content"
                      >
                        <Form action="#" autoComplete="off" className="tablelist-form">
                          <ModalBody className="modal-body">
                            <Input type="hidden" id="id-field" />

                            <div className="mb-3 d-none" id="modal-id">
                              <Label
                                htmlFor="applicationId"
                                className="form-label"
                              >
                                ID
                              </Label>
                              <Input
                                type="text"
                                id="applicationId"
                                className="form-control"
                                placeholder="ID"
                                readOnly
                              />
                            </div>

                            <div className="text-center">
                              <div className="position-relative d-inline-block">
                                <div className="position-absolute  bottom-0 end-0">
                                  <Label
                                    htmlFor="companylogo-image-input"
                                    className="mb-0"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="right"
                                    title="Select Image"
                                  >
                                    <div className="avatar-xs cursor-pointer">
                                      <div className="avatar-title bg-light border rounded-circle text-muted">
                                        <i className="ri-image-fill"></i>
                                      </div>
                                    </div>
                                  </Label>
                                  <Input
                                    className="form-control d-none"
                                    id="companylogo-image-input"
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                  />
                                </div>
                                <div className="avatar-lg p-1">
                                  <div className="avatar-title bg-light rounded-circle">
                                    <img
                                      src={MultiUser}
                                      id="companylogo-img"
                                      className="avatar-md h-auto rounded-circle object-fit-cover"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mb-3">
                              <Label
                                htmlFor="company-field"
                                className="form-label"
                              >
                                Company
                              </Label>
                              <Input
                                type="text"
                                id="company-field"
                                className="form-control"
                                placeholder="Enter company name"
                                required
                              />
                            </div>

                            <div className="mb-3">
                              <Label
                                htmlFor="designation-field"
                                className="form-label"
                              >
                                Designation
                              </Label>
                              <Input
                                type="text"
                                id="designation-field"
                                className="form-control"
                                placeholder="Enter designation"
                                required
                              />
                            </div>

                            <div className="mb-3">
                              <Label
                                htmlFor="date-field"
                                className="form-label"
                              >
                                Apply Date
                              </Label>
                              <Input
                                type="date"
                                id="date-field"
                                className="form-control"
                                data-provider="flatpickr"
                                data-date-format="d M, Y"
                                required
                                placeholder="Select date"
                              />
                            </div>

                            <div className="mb-3">
                              <Label
                                htmlFor="contact-field"
                                className="form-label"
                              >
                                Contacts
                              </Label>
                              <Input
                                type="text"
                                id="contact-field"
                                className="form-control"
                                placeholder="Enter contact"
                                required
                              />
                            </div>

                            <div className="gy-4 mb-3">
                              <div className="col-md-6">
                                <div>
                                  <Label
                                    htmlFor="status-input"
                                    className="form-label"
                                  >
                                    Status
                                  </Label>
                                  <Select
                                    className="form-control"
                                    data-trigger
                                    name="status-input"
                                    id="status-input"
                                  >
                                    <option value="">Status</option>
                                    <option value="Approved">Approved</option>
                                    <option value="New">New</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Rejected">Rejected</option>
                                  </Select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div>
                                  <Label
                                    htmlFor="type-input"
                                    className="form-label"
                                  >
                                    Type
                                  </Label>
                                  <Select
                                    className="form-control"
                                    data-trigger
                                    name="type-input"
                                    id="type-input"
                                  >
                                    <option value="">Select Type</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                  </Select>
                                </div>
                              </div>
                            </div>
                          </ModalBody>
                          <div className="modal-footer">
                            <div className="hstack gap-2 justify-content-end">
                              <Button
                                type="button"
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </Button>
                              <Button
                                color="success"
                                type="submit"
                                id="add-btn"
                              >
                                Add
                              </Button>
                              <Button
                                color="success"
                                type="button"
                                id="edit-btn"
                              >
                                Update
                              </Button>
                            </div>
                          </div>
                        </Form>
                      </Modal>
                    </div>
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

export default Application;
