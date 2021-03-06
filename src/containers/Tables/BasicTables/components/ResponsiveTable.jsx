import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Badge, Table, Button, Row, Input } from "reactstrap";
import { Link } from "react-router-dom";
import BasicTableData from "./BasicTableData";
import { Field, reduxForm } from "redux-form";
import { FaFileArchive } from "react-icons/fa";
import { GoDesktopDownload } from "react-icons/go";
import renderFileInputField from '../../../../shared/components/form/FileInput';

const { tableHeaderResponsiveData, tableRowsData } = BasicTableData();

const ResponsiveTable = () => {
  const { t } = useTranslation("common");
  const myFunction = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <Row>
          <Col md={6} lg={6}>
          <div className="card__title">
            {/* <h5 className="bold-text">{t('tables.basic_tables.responsive_table')}</h5>
            <h5 className="subhead">Use default table with property <span className="red-text">responsive</span></h5> */}
            <Link to="/forms/add_project">
              <Button type="warning">Add new project</Button>
            </Link>
            
          </div>
          </Col>
            <form>
            <div className="form__form-group">
              <span className="form__form-group-label"><h3>Import Project</h3></span>
              <div className="form__form-group-field">
                <Field name="file" component={renderFileInputField} />
              </div>
            </div>
            </form>
          </Row>
          <Col md={3} lg={3}>
          <Input bsSize="sm" type="text" id="myInput" onKeyUp={myFunction} placeholder="Search by project" title="Type in a name"/>
          </Col>
          <Table responsive className="table--bordered" id="myTable">
            <thead>
              <tr>
                {tableHeaderResponsiveData.map((item) => (
                  <th key={item.id}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRowsData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.Company}</td>
                  <td>{item.Project}</td>
                  <td>{item.date}</td>
                  <td>{item.username}</td>
                  {/* <td>{item.age}</td> */}
                  <td>{item.location}</td>
                  <td>{item.location}</td>
                  <td>
                    <Badge color={item.status_resp}>{item.badge_resp}</Badge>
                  </td>
                  <td>
                    <Link to="/tables/users_issue">
                      <Button size="sm"  type="warning">View</Button>
                    </Link>
                  </td>
                  <td>
                    <Link to="/tables/archives">
                      <button className="arch-data">
                        <FaFileArchive size={20} />
                      </button>
                    </Link>
                  </td>
                  
                  <td>
                    <p>
                      <GoDesktopDownload className="issue-down" size={30} />
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default reduxForm({
  form: 'ResponsiveTable', // a unique identifier for this form
})(ResponsiveTable);;
