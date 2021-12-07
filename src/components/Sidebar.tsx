import {
  faCheck,
  faRestroom,
  faSignOutAlt,
  faTimes,
  faUserFriends,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Button, Image, Nav, Navbar } from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import SimpleBar from "simplebar-react";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";
import OnimaLogo from "../assets/img/technologies/onima.png";
import useHasAdminRole from "../features/auth/hooks/useHasAdminRole";
import { Routes } from "../routes";

export default () => {
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";
  const isAdmin = useHasAdminRole();

  const onCollapse = () => setShow(!show);

  const NavItem = (props) => {
    const {
      title,
      link,
      external,
      target,
      icon,
      onClick,
      image,
      badgeText,
      badgeBg = "secondary",
      badgeColor = "primary",
    } = props;
    const classNames = badgeText
      ? "d-flex justify-content-start align-items-center justify-content-between"
      : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={onClick}>
        <Nav.Link
          {...linkProps}
          target={target}
          className={classNames}
          to="/hotel"
        >
          <span>
            {icon ? (
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
            ) : null}
            {image ? <Image src={image} width={40} height={40} /> : null}
            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge
              pill
              bg={badgeBg}
              text={badgeColor}
              className="badge-md notification-count ms-2"
            >
              {badgeText}
            </Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar
        expand={false}
        collapseOnSelect
        variant="dark"
        className="navbar-theme-primary px-4 d-md-none"
      >
        <Navbar.Brand
          className="me-lg-5"
          as={Link}
          to={Routes.DashboardOverview.path}
        >
          <Image src={OnimaLogo} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle
          as={Button}
          aria-controls="main-navbar"
          onClick={onCollapse}
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar
          className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}
        >
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image
                    src={ProfilePicture}
                    className="card-img-top rounded-circle border-white"
                  />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button
                    as={Link}
                    variant="secondary"
                    to={Routes.Signin.path}
                    className="text-dark"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />{" "}
                    Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link
                className="collapse-close d-md-none"
                onClick={onCollapse}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem
                title="Hotel Management"
                onClick={() => history.push("/hotel")}
                image={OnimaLogo}
              />
              <>
                {isAdmin && (
                  <NavItem
                    title="Users"
                    icon={faUsers}
                    onClick={() => history.push("/users")}
                  />
                )}
                <NavItem
                  title="Categories"
                  icon={faUserFriends}
                  onClick={() => history.push("/categories")}
                />
                <NavItem
                  title="Status"
                  onClick={() => history.push("/status")}
                  icon={faCheck}
                />
                <NavItem
                  onClick={() => history.push("/rooms")}
                  title="Rooms"
                  icon={faRestroom}
                />
                <NavItem
                  onClick={() => history.push("/reservation-rooms")}
                  title="Reservation Room"
                  icon={faRestroom}
                />
                {/* <CollapsableNavItem title="Task Management" icon={faTasks}>
                    <NavItem
                      onClick={() => history.push("/task/designers")}
                      external
                      title="Designers"
                      icon={faPenFancy}
                    />
                    <NavItem
                      onClick={() => history.push("/task/social-media")}
                      external
                      title="Social Media"
                      icon={faPhotoVideo}
                    />
                  </CollapsableNavItem> */}
              </>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
