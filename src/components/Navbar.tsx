import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faCog,
  faEnvelopeOpen,
  faInfo,
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
import React, { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../api/api";
import { useAppDispatch } from "../app/store";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import { setAuthUser } from "../features/auth/authSlice";
import { authUserSelector } from "../features/auth/selectors/auth.selectors";
import { removeAuthToken } from "../features/auth/utils/localStorage";
import ShowInfoModal from "../features/management/components/ShowInfoModal/ShowInfoModal";
import useShowInfoModal from "../features/management/hooks/useShowInfoModal";
import useShowInfoCategoryModal from "../features/management/hooks/useShowInfoModal";
import useKeyPress from "../hooks/useKeyPress/useKeyPress";
import { api } from "../services/api";

export function User(): ReactElement {
  const authUser: any = useSelector(authUserSelector);

  return (
    <>
      <div>
        {authUser?.data?.user?.first_name + " " + authUser?.data?.user?.surname}
      </div>
      <div>
        <span style={{ color: "grey" }}>
          {authUser?.data?.user?.role_id == 3 ? "Basic User" : "Admin"}
        </span>
      </div>
    </>
  );
}

export default () => {
  const dispatch = useAppDispatch();
  const authUser = useSelector(authUserSelector);

  const shiftPress = useKeyPress("Shift");

  const showInfoModal = useShowInfoModal();

  const handleLogout = () => {
    if (authUser) {
      dispatch(setAuthUser(null));
      dispatch(api.util.resetApiState());

      removeAuthToken();
    }
  };

  useEffect(() => {
    if (shiftPress) {
      showInfoModal();
    }
  }, [shiftPress]);

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <button
                onClick={async () => {
                  localStorage.setItem("language", "sq");
                  window.location.reload();
                }}
                style={{
                  marginRight: 10,
                  height: 38,
                  width: 100,
                  border:
                    localStorage.getItem("language") == "sq"
                      ? "3 solid black"
                      : 0,
                }}
              >
                Sq
              </button>
              <button
                onClick={async () => {
                  await localStorage.setItem("language", "en");
                  window.location.reload();
                }}
                style={{
                  height: 38,
                  width: 100,
                  border:
                    localStorage.getItem("language") == "en"
                      ? "3 solid black"
                      : 0,
                }}
              >
                En
              </button>
            </div>
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
                <Dropdown.Item onClick={showInfoModal} className="fw-bold">
                  <FontAwesomeIcon icon={faInfo} className="text-danger me-2" />
                  {localStorage.getItem("language") == "sq"
                    ? "   Manuali"
                    : "   Manual"}
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout} className="fw-bold">
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="text-danger me-2"
                  />
                  {localStorage.getItem("language") == "sq"
                    ? "Qkyqu"
                    : "Logout"}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
