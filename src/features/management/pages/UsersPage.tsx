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

import { UsersTable } from "../../../components/Tables";
import useShowCreateUserModal from "../hooks/useShowCreateUserModal";
import useHasAdminRole from "../../auth/hooks/useHasAdminRole";

function UsersPage(): ReactElement {
  const showCreateUserModal = useShowCreateUserModal();
  const isAdmin = useHasAdminRole();
  const language = localStorage.getItem("language");
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>{language == "sq" ? "Perdoruesit" : "Users"}</h4>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          {isAdmin && (
            <Button
              onClick={() => showCreateUserModal({})}
              style={{ marginRight: 10 }}
            >
              {language == "sq" ? "Shto + " : "Add New +"}
            </Button>
          )}
        </div>
      </div>

      <UsersTable />
    </>
  );
}

export default UsersPage;
