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

import { CategoriesTable } from "../../../components/Tables";
import useShowCreateCategoryModal from "../hooks/useShowCreateCategoryModal";

function CategoriesPage(): ReactElement {
  const showCreateCategoryModal = useShowCreateCategoryModal();
  const isAdmin = useHasAdminRole();
  const language = localStorage.getItem("language");

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>{language == "sq" ? "Kategorite" : "Categories"}</h4>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          {isAdmin && (
            <Button
              onClick={() => showCreateCategoryModal({})}
              style={{ marginRight: 10 }}
            >
              {language == "sq" ? "Shto + " : "Add New +"}
            </Button>
          )}
        </div>
      </div>

      <CategoriesTable />
    </>
  );
}

export default CategoriesPage;
