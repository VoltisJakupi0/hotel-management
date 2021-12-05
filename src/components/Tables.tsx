import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faEdit,
  faEllipsisH,
  faExternalLinkAlt,
  faEye,
  faHotel,
  faPen,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Nav,
  Card,
  Image,
  Button,
  Table,
  Dropdown,
  ProgressBar,
  Pagination,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import { Routes } from "../routes";
import {
  pageVisits,
  designersTasks,
  pageRanking,
  socialMediaTasks,
  myTasks,
  categories,
  status,
  rooms,
  reservations,
} from "../data/tables";
import users from "../data/users";
import clients from "../data/clients";
import commands from "../data/commands";
import useShowReserveRoomModal from "../features/management/hooks/useShowReserveRoomModal";

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
  const TableRow = (props) => {
    const { id, categoryName } = props;

    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{categoryName}</td>
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
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export const StatusTable = () => {
  const TableRow = (props) => {
    const { id, statusName } = props;

    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{statusName}</td>
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
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Status Name</th>
          </tr>
        </thead>
        <tbody>
          {status.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
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
      <Table responsive className="align-items-center table-flush">
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

export const DesignersTable = () => {
  const TableRow = (props) => {
    const {
      id,
      name,
      surname,
      description,
      category,
      client,
      taskName,
      startDate,
      endDate,
      difficulty,
      payment,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">
            {id}
          </Card.Link>
        </td>
        <td className="fw-bold">
          {/* <FontAwesomeIcon
            icon={sourceIcon}
            className={`icon icon-xs text-${sourceIconColor} w-30`}
          /> */}
          {name}
        </td>
        <td>{surname}</td>
        <td>{taskName}</td>
        <td>{description}</td>
        <td>{category ? category : "--"}</td>
        <td>{client ? client : "--"}</td>
        <td>{startDate ? startDate : "--"}</td>
        <td>{endDate ? endDate : "--"}</td>
        <td>{payment ? payment : "--"}</td>
        {/* 
        <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{difficulty}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar
                variant="primary"
                className="progress-lg mb-0"
                now={difficulty}
                min={0}
                max={100}
              />
            </Col>
          </Row>
        </td> */}
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">#</th>
              <th className="border-0">Name</th>
              <th className="border-0">Surname</th>
              <th className="border-0">Task Name</th>
              <th className="border-0">Description</th>
              <th className="border-0">Category</th>
              <th className="border-0">Client</th>
              <th className="border-0">Start Date</th>
              <th className="border-0">End Date</th>
              <th className="border-0">Payment</th>
              {/* <th className="border-0">Difficulty</th> */}
            </tr>
          </thead>
          <tbody>
            {designersTasks.map((pt) => (
              <TableRow key={`page-traffic-${pt.id}`} {...pt} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const SocialMediaTable = () => {
  const TableRow = (props) => {
    const {
      id,
      name,
      surname,
      taskName,
      description,
      category,
      client,
      startDate,
      payment,
      endDate,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">
            {id}
          </Card.Link>
        </td>
        <td className="fw-bold">
          {/* <FontAwesomeIcon
            icon={sourceIcon}
            className={`icon icon-xs text-${sourceIconColor} w-30`}
          /> */}
          {name}
        </td>
        <td>{surname}</td>
        <td>{taskName}</td>
        <td>{description}</td>
        <td>{category ? category : "--"}</td>
        <td>{client ? client : "--"}</td>
        <td>{startDate ? startDate : "--"}</td>
        <td>{endDate ? endDate : "--"}</td>
        <td>{payment ? payment : "--"}</td>
        {/* <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{difficulty}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar
                variant="primary"
                className="progress-lg mb-0"
                now={difficulty}
                min={0}
                max={100}
              />
            </Col>
          </Row>
        </td> */}
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">#</th>
              <th className="border-0">Name</th>
              <th className="border-0">Surname</th>
              <th className="border-0">Task Name</th>
              <th className="border-0">Description</th>
              <th className="border-0">Category</th>
              <th className="border-0">Client</th>
              <th className="border-0">Start Date</th>
              <th className="border-0">End Date</th>
              <th className="border-0">Payment</th>
            </tr>
          </thead>
          <tbody>
            {socialMediaTasks.map((pt) => (
              <TableRow key={`page-traffic-${pt.id}`} {...pt} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const MyTasks = () => {
  const TableRow = (props) => {
    const {
      id,
      name,
      surname,
      taskName,
      description,
      category,
      client,
      startDate,
      payment,
      endDate,
      difficulty,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">
            {id}
          </Card.Link>
        </td>
        <td>{taskName}</td>
        <td>{description}</td>
        <td>{category ? category : "--"}</td>
        <td>{client ? client : "--"}</td>
        <td>{startDate ? startDate : "--"}</td>
        <td>{endDate ? endDate : "--"}</td>
        <td>{payment ? payment : "--"}</td>
        <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{difficulty}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar
                variant="primary"
                className="progress-lg mb-0"
                now={difficulty}
                min={0}
                max={100}
              />
            </Col>
          </Row>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">#</th>
              <th className="border-0">Task Name</th>
              <th className="border-0">Description</th>
              <th className="border-0">Category</th>
              <th className="border-0">Client</th>
              <th className="border-0">Start Date</th>
              <th className="border-0">End Date</th>
              <th className="border-0">Payment</th>
              <th className="border-0">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map((pt) => (
              <TableRow key={`page-traffic-${pt.id}`} {...pt} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const RankingTable = () => {
  const TableRow = (props) => {
    const {
      country,
      countryImage,
      overallRank,
      overallRankChange,
      travelRank,
      travelRankChange,
      widgetsRank,
      widgetsRankChange,
    } = props;

    return (
      <tr>
        <td className="border-0">
          <Card.Link href="#" className="d-flex align-items-center">
            <Image
              src={countryImage}
              className="image-small rounded-circle me-2"
            />
            <div>
              <span className="h6">{country}</span>
            </div>
          </Card.Link>
        </td>
        <td className="fw-bold border-0">{overallRank ? overallRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={overallRankChange} />
        </td>
        <td className="fw-bold border-0">{travelRank ? travelRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={travelRankChange} />
        </td>
        <td className="fw-bold border-0">{widgetsRank ? widgetsRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={widgetsRankChange} />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Country</th>
              <th className="border-0">All</th>
              <th className="border-0">All Change</th>
              <th className="border-0">Travel & Local</th>
              <th className="border-0">Travel & Local Change</th>
              <th className="border-0">Widgets</th>
              <th className="border-0">Widgets Change</th>
            </tr>
          </thead>
          <tbody>
            {pageRanking.map((r) => (
              <TableRow key={`ranking-${r.id}`} {...r} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const ClientsTable = () => {
  const totalClients = clients.length;

  const TableRow = (props) => {
    const { name, surname, musicname, contractdate, id, status } = props;
    const statusVariant =
      status === "Active"
        ? "success"
        : status === "Due"
        ? "warning"
        : status === "Canceled"
        ? "danger"
        : "primary";

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {id}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{name}</span>
        </td>
        <td>
          <span className="fw-normal">{surname}</span>
        </td>
        <td>
          <span className="fw-normal">{musicname}</span>
        </td>
        <td>
          <span className="fw-normal">{contractdate}</span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>{status}</span>
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
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">ID</th>
              <th className="border-bottom">Name</th>
              <th className="border-bottom">Surname</th>
              <th className="border-bottom">Music Name</th>
              <th className="border-bottom">Contract Date</th>
              <th className="border-bottom">Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((t) => (
              <TableRow key={`${t.id}`} {...t} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalClients}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const RoomsTable = () => {
  const showReservationModal = useShowReserveRoomModal();
  const totalClients = rooms.length;

  const TableRow = (props) => {
    const { clientNr, price, roomNr, category, id, status } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {id}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{roomNr}</span>
        </td>
        <td>
          <span className="fw-normal">{clientNr}</span>
        </td>
        <td>
          <span className="fw-normal">{category}</span>
        </td>
        <td>
          <span className="fw-normal">{status}</span>
        </td>
        <td>
          <span className="fw-normal">{price}</span>
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
              <Dropdown.Item onClick={showReservationModal}>
                <FontAwesomeIcon icon={faHotel} className="me-2" /> Book
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">ID</th>
              <th className="border-bottom">Room Number</th>
              <th className="border-bottom">Client Max limit</th>
              <th className="border-bottom">Category</th>
              <th className="border-bottom">Status</th>
              <th className="border-bottom">Price</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((t) => (
              <TableRow key={`${t.id}`} {...t} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalClients}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const ReservationsTable = () => {
  const totalClients = reservations.length;

  const TableRow = (props) => {
    const {
      clientName,
      clientSurname,
      clientEmail,
      roomNr,
      reservationDate,
      endReservationDate,
      id,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {id}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{roomNr}</span>
        </td>
        <td>
          <span className="fw-normal">{clientName}</span>
        </td>
        <td>
          <span className="fw-normal">{clientSurname}</span>
        </td>
        <td>
          <span className="fw-normal">{clientEmail}</span>
        </td>
        <td>
          <span className="fw-normal">{reservationDate}</span>
        </td>
        <td>
          <span className="fw-normal">{endReservationDate}</span>
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
              <Dropdown.Item>
                <FontAwesomeIcon icon={faHotel} className="me-2" /> Cancel
                Reservation
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faPen} className="me-2" /> Edit
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">ID</th>
              <th className="border-bottom">Room Number</th>
              <th className="border-bottom">Client Name</th>
              <th className="border-bottom">Client Surname</th>
              <th className="border-bottom">Client Email</th>
              <th className="border-bottom">Reservation Date</th>
              <th className="border-bottom">Leave Date</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((t) => (
              <TableRow key={`${t.id}`} {...t} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalClients}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const UsersTable = () => {
  const totalUsers = users.length;

  const TableRow = (props) => {
    const { name, surname, datebirth, role, id, email, password } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {id}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{name}</span>
        </td>
        <td>
          <span className="fw-normal">{surname}</span>
        </td>
        <td>
          <span className="fw-normal">{email}</span>
        </td>
        <td>
          <span className="fw-normal">{password}</span>
        </td>
        <td>
          <span className="fw-normal">{datebirth}</span>
        </td>
        <td>
          <span className="fw-normal">{role}</span>
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
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">ID</th>
              <th className="border-bottom">Name</th>
              <th className="border-bottom">Surname</th>
              <th className="border-bottom">Email</th>
              <th className="border-bottom">Password</th>
              <th className="border-bottom">DateBirth</th>
              <th className="border-bottom">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((t) => (
              <TableRow key={`${t.id}`} {...t} />
            ))}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>Previous</Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>Next</Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalUsers}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const CommandsTable = () => {
  const TableRow = (props) => {
    const { name, usage = [], description, link } = props;

    return (
      <tr>
        <td className="border-0" style={{ width: "5%" }}>
          <code>{name}</code>
        </td>
        <td className="fw-bold border-0" style={{ width: "5%" }}>
          <ul className="ps-0">
            {usage.map((u) => (
              <ol key={u} className="ps-0">
                <code>{u}</code>
              </ol>
            ))}
          </ul>
        </td>
        <td className="border-0" style={{ width: "50%" }}>
          <pre className="m-0 p-0">{description}</pre>
        </td>
        <td className="border-0" style={{ width: "40%" }}>
          <pre>
            <Card.Link href={link} target="_blank">
              Read More{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
            </Card.Link>
          </pre>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-0">
        <Table
          responsive
          className="table-centered rounded"
          style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
        >
          <thead className="thead-light">
            <tr>
              <th className="border-0" style={{ width: "5%" }}>
                Name
              </th>
              <th className="border-0" style={{ width: "5%" }}>
                Usage
              </th>
              <th className="border-0" style={{ width: "50%" }}>
                Description
              </th>
              <th className="border-0" style={{ width: "40%" }}>
                Extra
              </th>
            </tr>
          </thead>
          <tbody>
            {commands.map((c) => (
              <TableRow key={`command-${c.id}`} {...c} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
