import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faCog,
  faEnvelopeOpen,
  faSearch,
  faSignOutAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Dropdown,
  Form,
  Image,
  InputGroup,
  Nav,
  Navbar,
} from "@themesberg/react-bootstrap";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/store";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import { setAuthUser } from "../features/auth/authSlice";
import { authUserSelector } from "../features/auth/selectors/auth.selectors";
import { removeAuthToken } from "../features/auth/utils/localStorage";
import { api } from "../services/api";

export function User(): ReactElement {
  const authUser = useSelector(authUserSelector);

  // return <div>{authUser.name}</div>;
  return (
    <div>{authUser.name == "dr / Daniel Rausch" ? "Admin" : "Basic User"}</div>
  );
}

export default () => {
  const dispatch = useAppDispatch();
  const authUser = useSelector(authUserSelector);

  const handleLogout = () => {
    if (authUser) {
      dispatch(setAuthUser(null));
      dispatch(api.util.resetApiState());

      removeAuthToken();
    }
  };

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <Form className="navbar-search">
              <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge search-bar">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <Image
                    src={Profile3}
                    className="user-avatar md-avatar rounded-circle"
                  />
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">
                      <User />
                    </span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My
                  Profile
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" />{" "}
                  Messages
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserShield} className="me-2" />{" "}
                  Support
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item onClick={handleLogout} className="fw-bold">
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="text-danger me-2"
                  />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
