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

import { ReservationsTable } from "../../../components/Tables";

function ReservationPage(): ReactElement {
  const language = localStorage.getItem("language");
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>
            {language == "sq"
              ? "Informatat rreth rezervimit te dhomave"
              : "Reservation Rooms Info"}
          </h4>
        </div>
      </div>

      <ReservationsTable />
    </>
  );
}

export default ReservationPage;
