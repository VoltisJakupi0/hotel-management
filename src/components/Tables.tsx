import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faEdit,
  faEllipsisH,
  faExternalLinkAlt,
  faHotel,
  faPen,
  faSearch,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Dropdown,
  Form,
  InputGroup,
  Row,
  Spinner,
  Table,
} from "@themesberg/react-bootstrap";
import dayjs from "dayjs";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clients from "../data/clients";
import {
  categories,
  designersTasks,
  myTasks,
  pageRanking,
  pageVisits,
  reservations,
  rooms,
  socialMediaTasks,
  status,
} from "../data/tables";
import users from "../data/users";
import useShowCreateCategoryModal from "../features/management/hooks/useShowCreateCategoryModal";
import useShowCreateRoomModal from "../features/management/hooks/useShowCreateRoomModal";
import useShowCreateStatusModal from "../features/management/hooks/useShowCreateStatusModal";
import useShowCreateUserModal from "../features/management/hooks/useShowCreateUserModal";
import useShowReserveRoomModal from "../features/management/hooks/useShowReserveRoomModal";
import {
  useDeleteCategoryMutation,
  useDeleteRoomMutation,
  useDeleteStatusMutation,
  useDeleteUserMutation,
  useEditBookedRoomMutation,
  useGetBookedRoomsQuery,
  useGetCategoriesQuery,
  useGetRoomsQuery,
  useGetStatusQuery,
  useGetUsersQuery,
} from "../features/management/services/dashboardApi";
import { Routes } from "../routes";

const ValueChange = ({ value, suffix = "" }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return value ? (
    <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}
        {suffix}
      </span>
    </span>
  ) : (
    <span>"--"</span>
  );
};

export const CategoriesTable = () => {
  const [data, setData] = useState<any>([]);
  const [searchText, setSearchText] = useState<any>("");

  const category = useGetCategoriesQuery();
  const [removeCategory] = useDeleteCategoryMutation();
  const editModal = useShowCreateCategoryModal();

  const search = async (e) => {
    const input = e.target.value;
    const filtered = data.filter((item) => {
      return (
        item.id?.toString().includes(input?.toString()) ||
        item.category_name
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase())
      );
    });
    setSearchText(input);
    setData(input ? filtered : category?.data);
  };

  useEffect(() => {
    setData(category?.data);
  }, [category]);

  const TableRow = (props) => {
    const { id, category_name } = props;

    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{category_name}</td>
        <td style={{ zIndex: 10000 }}>
          <Dropdown alignment="top" as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  editModal({
                    id,
                    category_name,
                  });
                }}
              >
                <FontAwesomeIcon icon={faEdit} className="me-2" />{" "}
                {localStorage.getItem("language") == "sq" ? "Edito" : "Edit"}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  removeCategory(id).then(() => {
                    category.refetch();
                    setSearchText("");
                  });
                }}
                className="text-danger"
              >
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" />{" "}
                {localStorage.getItem("language") == "sq" ? "Fshij" : "Remove"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control
                value={searchText}
                onChange={search}
                type="text"
                placeholder={
                  localStorage.getItem("language") == "sq" ? "Kerko" : "Search"
                }
              />
            </InputGroup>
          </Col>
        </Row>
      </div>
      <Card border="light">
        {category.isLoading || category.isFetching ? (
          <Spinner animation="border" />
        ) : (
          <Table responsive hover className="user-table align-items-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  {localStorage.getItem("language") == "sq"
                    ? "Emri Kategorise"
                    : "Category Name"}
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((pv) => (
                <TableRow key={`page-visit-${pv.id}`} {...pv} />
              ))}
            </tbody>
          </Table>
        )}
      </Card>
    </>
  );
};

export const StatusTable = () => {
  const [data, setData] = useState<any>([]);
  const [searchText, setSearchText] = useState<any>("");

  const status = useGetStatusQuery();
  const editModal = useShowCreateStatusModal();

  const [removeStatus] = useDeleteStatusMutation();

  const search = async (e) => {
    const input = e.target.value;
    const filtered = data.filter((item) => {
      return (
        item.id?.toString().includes(input?.toString()) ||
        item.status_name
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase())
      );
    });
    setSearchText(input);
    setData(input ? filtered : status?.data);
  };

  useEffect(() => {
    setData(status?.data);
  }, [status]);

  const TableRow = (props) => {
    const { id, status_name } = props;

    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{status_name}</td>
        <td style={{ zIndex: 10000 }}>
          <Dropdown alignment="top" as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  editModal({
                    id,
                    status_name,
                  });
                }}
              >
                <FontAwesomeIcon icon={faEdit} className="me-2" />{" "}
                {localStorage.getItem("language") == "sq" ? "Edito" : "Edit"}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  removeStatus(id).then(() => {
                    status.refetch();
                    setSearchText("");
                  });
                }}
                className="text-danger"
              >
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" />{" "}
                {localStorage.getItem("language") == "sq" ? "Fshij" : "Remove"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control
                value={searchText}
                onChange={search}
                type="text"
                placeholder={
                  localStorage.getItem("language") == "sq" ? "Kerko" : "Search"
                }
              />
            </InputGroup>
          </Col>
        </Row>
      </div>
      <Card border="light" className="shadow-sm">
        {status.isLoading || status.isFetching ? (
          <Spinner animation="border" />
        ) : (
          <Table
            style={{ height: "100%" }}
            hover
            responsive
            className="user-table align-items-center"
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  {localStorage.getItem("language") == "sq"
                    ? "Emri Statusit"
                    : "Status Name"}
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((pv) => (
                <TableRow key={`page-visit-${pv.id}`} {...pv} />
              ))}
            </tbody>
          </Table>
        )}
      </Card>
    </>
  );
};

export const PageVisitsTable = () => {
  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
    const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{pageName}</th>
        <td>{views}</td>
        <td>${returnValue}</td>
        <td>
          <FontAwesomeIcon
            icon={bounceIcon}
            className={`${bounceTxtColor} me-3`}
          />
          {Math.abs(bounceRate)}%
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Page visits</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">
              See all
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Table hover className="user-table align-items-center">
        <thead className="thead-light">
          <tr>
            <th scope="col">Page name</th>
            <th scope="col">Page Views</th>
            <th scope="col">Page Value</th>
            <th scope="col">Bounce rate</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export const RoomsTable = () => {
  const showReservationModal = useShowReserveRoomModal();

  const editModal = useShowCreateRoomModal();

  const [data, setData] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");

  const rooms = useGetRoomsQuery();

  const [removeRoom] = useDeleteRoomMutation();

  const search = async (e) => {
    const input = e.target.value;
    const filtered = data.filter((item) => {
      return (
        item.room_price?.toString().includes(input?.toString()) ||
        item.room_number
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase()) ||
        item.id
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase()) ||
        item.statusName
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase()) ||
        item.categoryName
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase())
      );
    });
    setSearchText(input);
    setData(input ? filtered : rooms?.data);
  };

  useEffect(() => {
    setData(rooms?.data);
  }, [rooms]);

  const TableRow = (props) => {
    const {
      room_price,
      room_number,
      category_id,
      status_id,
      categoryName,
      id,
      statusName,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {id}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{room_number}</span>
        </td>

        <td>
          <span className="fw-normal">{categoryName}</span>
        </td>
        <td>
          <span className="fw-normal">{statusName}</span>
        </td>
        <td>
          <span className="fw-normal">{room_price}$</span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => showReservationModal({ id })}>
                <FontAwesomeIcon icon={faHotel} className="me-2" />{" "}
                {localStorage.getItem("language") == "sq" ? "Rezervo" : "Book"}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  editModal({
                    id,
                    room_price,
                    room_number,
                    category_id,
                    status_id,
                  });
                }}
              >
                <FontAwesomeIcon icon={faEdit} className="me-2" />{" "}
                {localStorage.getItem("language") == "sq" ? "Edito" : "Edit"}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  removeRoom(id).then(() => {
                    rooms.refetch();
                    setSearchText("");
                  });
                }}
                className="text-danger"
              >
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" />{" "}
                {localStorage.getItem("language") == "sq" ? "Fshije" : "Remove"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control
                value={searchText}
                onChange={search}
                type="text"
                placeholder={
                  localStorage.getItem("language") == "sq" ? "Kerko" : "Search"
                }
              />
            </InputGroup>
          </Col>
        </Row>
      </div>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          {rooms.isLoading || rooms.isFetching ? (
            <Spinner animation="border" />
          ) : (
            <Table hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom">ID</th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Numri Dhomes"
                      : "Room Number"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Kategoria "
                      : "Category"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Statusi"
                      : "Status"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Qmimi"
                      : "Price"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((t) => (
                  <TableRow key={`${t.id}`} {...t} />
                ))}
              </tbody>
            </Table>
          )}
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between"></Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

export const ReservationsTable = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const bookedrooms = useGetBookedRoomsQuery();
  const [cancelReservation] = useEditBookedRoomMutation();
  const editModal = useShowReserveRoomModal();

  useEffect(() => {
    setData(bookedrooms?.data);
  }, [bookedrooms]);

  const search = async (e) => {
    const input = e.target.value;
    const filtered = data.filter((item) => {
      return (
        item.client_name?.toString().includes(input?.toString()) ||
        item.client_surname
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase()) ||
        item.room_number
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase()) ||
        item.entry_date?.toString().includes(input?.toString()) ||
        item.leave_date
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase()) ||
        item.client_email
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase())
      );
    });
    setSearchText(input);
    setData(input ? filtered : bookedrooms?.data);
  };

  const TableRow = (props) => {
    const {
      client_name,
      client_surname,
      client_email,
      room_id,
      room_price,
      entry_date,
      leave_date,
      client_personal_number,
      room_number,
      id,
      status,
    } = props;

    const leave = moment(leave_date, "DD-MM-YYYY");
    const entry = moment(entry_date, "DD-MM-YYYY");

    const difference = leave.diff(entry, "days");

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {id}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{room_number}</span>
        </td>
        <td>
          <span className="fw-normal">{client_name}</span>
        </td>
        <td>
          <span className="fw-normal">{client_surname}</span>
        </td>
        <td>
          <span className="fw-normal">{client_email}</span>
        </td>
        <td>
          <span className="fw-normal">{client_personal_number}</span>
        </td>
        <td>
          <span className="fw-normal">{entry_date}</span>
        </td>
        <td>
          <span className="fw-normal">{leave_date}</span>
        </td>
        <td>
          <span className="fw-normal">{difference * room_price}$</span>
        </td>
        <td>
          <span className="fw-normal">
            {moment(leave_date) < moment() ? "FINISHED" : status}
          </span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  const payload = {
                    status: "CANCELED",
                    client_name,
                    client_surname,
                    client_email,
                    room_id,
                    room_price,
                    entry_date,
                    leave_date,
                    client_personal_number,
                    room_number,
                    id,
                  };

                  cancelReservation({ payload, id }).then(() => {
                    bookedrooms.refetch();
                    setSearchText("");
                  });
                }}
              >
                <FontAwesomeIcon icon={faHotel} className="me-2" />
                {localStorage.getItem("language") == "sq"
                  ? "Anulo Rezervimin"
                  : "Cancel Reservation"}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  editModal({
                    client_name,
                    client_surname,
                    client_email,
                    room_id,
                    room_price,
                    entry_date,
                    leave_date,
                    client_personal_number,
                    room_number,
                    id,
                    status,
                  })
                }
              >
                <FontAwesomeIcon icon={faPen} className="me-2" />
                {localStorage.getItem("language") == "sq" ? "Edito" : "Edit"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control
                value={searchText}
                onChange={search}
                type="text"
                placeholder={
                  localStorage.getItem("language") == "sq" ? "Kerko" : "Search"
                }
              />
            </InputGroup>
          </Col>
        </Row>
      </div>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          {bookedrooms?.isLoading || bookedrooms.isFetching ? (
            <Spinner animation="border" />
          ) : (
            <Table hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom">ID</th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Nr Dhomes"
                      : "Room Number"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Emri Klientit"
                      : "Client Name"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Mbiemri Klientit"
                      : "Client Surname"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Emaili i Klientit"
                      : "Client Email"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Numri Personal i Klientit"
                      : "Client Personal Number"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Data e Rezervimit"
                      : "Reservation Date"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Data e Leshimit"
                      : "Leave Date"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Qmimi Total"
                      : "Total Price"}
                  </th>
                  <th className="border-bottom">
                    {" "}
                    {localStorage.getItem("language") == "sq"
                      ? "Statusi"
                      : "Status"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((t) => (
                  <TableRow key={`${t.id}`} {...t} />
                ))}
              </tbody>
            </Table>
          )}
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between"></Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

export const UsersTable = () => {
  const [data, setData] = useState<any>([]);
  const [removeUser] = useDeleteUserMutation();
  const [searchText, setSearchText] = useState<any>([]);
  const editModal = useShowCreateUserModal();

  const users = useGetUsersQuery();

  const search = async (e) => {
    const input = e.target.value;
    const filtered = data.filter((item) => {
      return (
        item.id?.toString().includes(input?.toString()) ||
        item.first_name
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase()) ||
        "Admin".includes(input?.toString()) ||
        "Perdorues Bazik".includes(input?.toString()) ||
        item.surname?.toString().includes(input?.toString()) ||
        item.email
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase()) ||
        item.surname?.toString().includes(input?.toString()) ||
        item.username
          ?.toString()
          ?.toLowerCase()
          .includes(input?.toString()?.toLowerCase())
      );
    });
    setSearchText(input);
    setData(input ? filtered : users?.data);
  };

  useEffect(() => {
    setData(users?.data);
  }, [users]);

  const TableRow = (props) => {
    const {
      first_name,
      surname,
      role_id,
      id,
      email,
      username,
      personal_number,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {id}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{first_name}</span>
        </td>
        <td>
          <span className="fw-normal">{surname}</span>
        </td>
        <td>
          <span className="fw-normal">{email}</span>
        </td>
        {/* <td>
          <span className="fw-normal">{passwd}</span>
        </td> */}
        <td>
          <span className="fw-normal">{username.split("@")[0]}</span>
        </td>

        <td>
          <span className="fw-normal">
            {role_id == "3" ? "Perdorues Bazik" : "Admin"}
          </span>
        </td>
        <td>
          <span className="fw-normal">{personal_number}</span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  editModal({
                    first_name,
                    surname,
                    role_id,
                    id,
                    email,
                    username,
                    personal_number,
                  });
                }}
              >
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  removeUser(id).then(() => {
                    users.refetch();
                    setSearchText("");
                  });
                }}
                className="text-danger"
              >
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control
                value={searchText}
                onChange={search}
                type="text"
                placeholder={
                  localStorage.getItem("language") == "sq" ? "Kerko" : "Search"
                }
              />
            </InputGroup>
          </Col>
        </Row>
      </div>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          {users.isLoading || users.isFetching ? (
            <Spinner animation="border" />
          ) : (
            <Table hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom">ID</th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq" ? "Emri" : "Name"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Mbiemri"
                      : "Surname"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Email-i"
                      : "Email"}
                  </th>
                  {/* <th className="border-bottom">Password</th> */}
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Emri i Perdoruesit"
                      : "Username"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq" ? "Roli" : "Role"}
                  </th>
                  <th className="border-bottom">
                    {localStorage.getItem("language") == "sq"
                      ? "Nr Personal"
                      : "Personal Number"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((t) => (
                  <TableRow key={`${t.id}`} {...t} />
                ))}
              </tbody>
            </Table>
          )}
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between"></Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};
