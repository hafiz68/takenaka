import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, Container, Row } from "reactstrap";
import DataReactTable from "./components/DataReactTable";
import CreateTableData from "../CreateData";
import { Link } from "react-router-dom";

const DataTable = () => {
  const { t } = useTranslation("common");
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 className="page-title">{t("User Management")}</h3>
              <h3 className="page-subhead subhead">
                Add and check your users here
              </h3>
            </div>
            <div className="add-btn">
              <Link to="/forms/usersissue">
                <Button>Add Issue</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <DataReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default DataTable;
