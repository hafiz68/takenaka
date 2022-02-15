import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col, Table, Badge, Button,
  ButtonToolbar, UncontrolledDropdown, DropdownToggle,
   DropdownMenu, DropdownItem
} from 'reactstrap';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '../../../../shared/components/form/Select';
import { Link } from 'react-router-dom';
import ReactTableBase from '../../../../shared/components/table/ReactTableBase';
import ReactTableCustomizer from '../../../../shared/components/table/components/ReactTableCustomizer';

const reorder = (rows, startIndex, endIndex) => {
  const result = Array.from(rows);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const DataReactTable = ({ reactTableData }) => {
  const [rows, setData] = useState(reactTableData.tableRowsData);
  const [isEditable, setIsEditable] = useState(false);
  const [isResizable, setIsResizable] = useState(false);
  const [isSortable, setIsSortable] = useState(false);
  const [isDisabledDragAndDrop, setIsDisabledDragAndDrop] = useState(false);
  const [isDisabledEditable, setIsDisabledEditable] = useState(false);
  const [isDisabledResizable, setIsDisabledResizable] = useState(false);
  const [withDragAndDrop, setWithDragAndDrop] = useState(false);
  const [withPagination, setWithPaginationTable] = useState(false);
  const [withSearchEngine, setWithSearchEngine] = useState(true);

  const handleClickIsEditable = () => {
    if (!withDragAndDrop) setIsDisabledResizable(!isDisabledResizable);
    setIsResizable(false);
    setIsEditable(!isEditable);
  };
  const handleClickIsResizable = () => {
    setIsEditable(false);
    setWithDragAndDrop(false);
    setIsDisabledDragAndDrop(!isDisabledDragAndDrop);
    setIsDisabledEditable(!isDisabledEditable);
    setIsResizable(!isResizable);
  };
  const handleClickIsSortable = () => {
    setIsSortable(!isSortable);
  };
  const handleClickWithDragAndDrop = () => {
    if (!isEditable) setIsDisabledResizable(!isDisabledResizable);
    setIsResizable(false);
    setWithDragAndDrop(!withDragAndDrop);
  };
  const handleClickWithPagination = () => {
    setWithPaginationTable(!withPagination);
  };
  const handleClickWithSearchEngine = () => {
    setWithSearchEngine(!withSearchEngine);
  };

  const updateDraggableData = (result) => {
    const items = reorder(
      rows,
      result.source.index,
      result.destination.index,
    );
    setData(items);
  };

  const updateEditableData = (rowIndex, columnId, value) => {
    setData(old => old.map((item, index) => {
      if (index === rowIndex) {
        return {
          ...old[rowIndex],
          [columnId]: value,
        };
      }
      return item;
    }));
  };

  const tableConfig = {
    isEditable,
    isResizable,
    isSortable,
    withDragAndDrop,
    withPagination,
    withSearchEngine,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Search by First name...',
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="react-table__wrapper">
            <div className="card__title">
              {/* <h5 className="bold-text">data react-table</h5>
              <h5 className="subhead">Use table with&nbsp;
                <span className="red-text">table customizer</span>
              </h5> */}
            </div>
            {/* <ReactTableCustomizer
              handleClickIsEditable={handleClickIsEditable}
              handleClickIsResizable={handleClickIsResizable}
              handleClickIsSortable={handleClickIsSortable}
              handleClickWithDragAndDrop={handleClickWithDragAndDrop}
              handleClickWithPagination={handleClickWithPagination}
              handleClickWithSearchEngine={handleClickWithSearchEngine}
              isEditable={isEditable}
              isResizable={isResizable}
              isSortable={isSortable}
              isDisabledDragAndDrop={isDisabledDragAndDrop}
              isDisabledEditable={isDisabledEditable}
              isDisabledResizable={isDisabledResizable}
              withDragAndDrop={withDragAndDrop}
              withPagination={withPagination}
              withSearchEngine={withSearchEngine}
              fullCustomizer
            /> */}
          </div>
          <Table responsive className="table--bordered">
            <thead>
              <tr>
                <th >Issue #</th>
                <th >Project Name</th>
                <th >Issue Title</th>
                <th >Date Created</th>
                <th >Status</th>
                <th >Change Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Cracks</td>
                <td>Ceiling cracks</td>
                <td>18/3/2022</td>
                <td>
                  
                    <Badge color={"primary"}>Ongoing</Badge>
                </td>
                <td>
                  <ButtonToolbar>
                    <UncontrolledDropdown>
                      <DropdownToggle size="sm" className="icon icon--right" outline>
                        <p>Change Status <ChevronDownIcon /></p>
                      </DropdownToggle>
                      <DropdownMenu size="sm" className="dropdown__menu">
                        <DropdownItem>Ongoin</DropdownItem>
                        <DropdownItem>Appproved</DropdownItem>
                        <DropdownItem>Completed</DropdownItem>
                        {/* <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem> */}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </ButtonToolbar>
                  
                  {/* <Field
                  name="3"
                  component={renderSelectField}
                  placeholder="Change Status"
                  color="primary"
                  options={[
                    { value: 'ongoing', label: 'Ongoing' },
                    { value: 'approvec', label: 'Approved' },

                  ]}
                /> */}
                </td>
              </tr><tr>
                <td>2</td>
                <td>Cracks</td>
                <td>Ceiling cracks</td>
                <td>18/3/2022</td>
                <td><Badge color={"success"}>approved</Badge></td>
                <td>
                  <ButtonToolbar>
                    <UncontrolledDropdown>
                      <DropdownToggle size="sm" className="icon icon--right" outline >
                        <p>Change Status <ChevronDownIcon /></p>
                      </DropdownToggle>
                      <DropdownMenu size="sm" className="dropdown__menu">
                        <DropdownItem>Ongoin</DropdownItem>
                        <DropdownItem>Appproved</DropdownItem>
                        <DropdownItem>Completed</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </ButtonToolbar>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Cracks</td>
                <td>Ceiling cracks</td>
                <td>18/3/2022</td>
                <td><Badge color={"danger"}>approved</Badge></td>
                <td>
                  <ButtonToolbar>
                    <UncontrolledDropdown>
                      <DropdownToggle size="sm" className="icon icon--right" outline>
                        <p>Change Status <ChevronDownIcon /></p>
                      </DropdownToggle>
                      <DropdownMenu size="sm" className="dropdown__menu">
                        <DropdownItem>Ongoin</DropdownItem>
                        <DropdownItem>Appproved</DropdownItem>
                        <DropdownItem>Completed</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </ButtonToolbar>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

DataReactTable.propTypes = {
  reactTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableHeaderData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableRowData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default reduxForm({
  form: 'DataReactTable', // a unique identifier for this form
})(DataReactTable);
// DataReactTable;
