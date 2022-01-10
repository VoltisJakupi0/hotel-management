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
import useHasAdminRole from "../../auth/hooks/useHasAdminRole";
import { StatusTable } from "../../../components/Tables";
import useShowCreateStatusModal from "../hooks/useShowCreateStatusModal";

function StatusPage(): ReactElement {
  const showCreateStatusModal = useShowCreateStatusModal();
  const isAdmin = useHasAdminRole();
  const language = localStorage.getItem("language");

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>{language == "sq" ? "Statusi" : "Status"}</h4>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          {isAdmin && (
            <Button
              onClick={() => showCreateStatusModal({})}
              style={{ marginRight: 10 }}
            >
              {language == "sq" ? "Shto + " : "Add New +"}
            </Button>
          )}
        </div>
      </div>

      <StatusTable />
    </>
  );
}

export default StatusPage;
