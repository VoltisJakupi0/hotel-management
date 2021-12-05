import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  InputGroup,
  Dropdown,
} from "@themesberg/react-bootstrap";

import { SocialMediaTable, UsersTable } from "../../../components/Tables";
import useShowCreateUserModal from "../hooks/useShowCreateUserModal";

function SocialMediaPage(): ReactElement {
  return (
    <div style={{ marginTop: 100 }}>
      <h5>Social Media Tasks</h5>
      <SocialMediaTable />
    </div>
  );
}

export default SocialMediaPage;
