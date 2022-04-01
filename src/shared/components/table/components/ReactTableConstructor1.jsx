import React from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useResizeColumns,
  useRowSelect,
} from "react-table";
import ReactTableHeader from "./ReactTableHeader";
import BodyReactTable from "./ReactTableBody";
import ReactTableFooter from "./ReactTableFooter";
import ReactTableFilter from "./ReactTableFilter";
import ReactTablePagination from "./ReactTablePagination";
import { Input, Label } from "reactstrap";

const ReactTableConstructor = ({
  tableConfig,
  tableOptions,
  tableOptionalHook,
}) => {
  const {
    isEditable,
    isResizable,
    isSortable,
    withPagination,
    withSearchEngine,
    manualPageSize,
    placeholder,
  } = tableConfig;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    state,
    rows,
    prepareRow,
    page,
    pageCount,
    pageOptions,
    gotoPage,
    previousPage,
    canPreviousPage,
    nextPage,
    canNextPage,
    setPageSize,
    setGlobalFilter,
    withDragAndDrop,
    updateDraggableData,
    updateEditableData,
    dataLength,
    state: { pageIndex, pageSize },
  } = useTable(
    tableOptions,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useResizeColumns,
    useRowSelect,
    ...tableOptionalHook
  );

  return (
    <div>
      {withSearchEngine && (
        <ReactTableFilter
          rows={rows}
          setGlobalFilter={setGlobalFilter}
          setFilterValue={tableOptions.setFilterValue}
          globalFilter={state.globalFilter}
          placeholder={placeholder}
          dataLength={dataLength}
        />
      )}
      <div
        className={
          withPagination
            ? "table react-table"
            : "table react-table table--not-pagination"
        }
      >
        <table
          {...getTableProps()}
          className={
            isEditable
              ? "react-table editable-table"
              : "react-table resizable-table"
          }
        >
          <thead>
            <tr>
              <th></th>
              <th>
              <label for="branch">filter by branch</label>
                <select name="branch" bsSize="sm" type="select" >
                  <option></option>
                  <option>Belgium</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </th>
              <th>
              <label for="client">filter by client</label>
                <select name="client" type="select" >
                  <option></option>
                  <option>Morrison</option>
                  <option>Medinberg</option>
                  <option>Brown</option>
                </select>
              </th>
              <th>
              <label for="project">filter by project</label>
                <select name="project" type="select" >
                  <option></option>
                  <option>DE Fuji Oil</option>
                  <option>DE Matika Ratingen</option>
                  <option>DE Mizuho Bank</option>
                </select>
              </th>
              <th>
              <label for="project">filter by Issue Id</label>
                <select name="project" type="select" >
                  <option></option>
                  <option>DE Fuji Oil</option>
                  <option>DE Matika Ratingen</option>
                  <option>DE Mizuho Bank</option>
                </select>
              </th>
              <th>
              <label for="project">filter by Issue Name</label>
                <select name="project" type="select" >
                  <option></option>
                  <option>DE Fuji Oil</option>
                  <option>DE Matika Ratingen</option>
                  <option>DE Mizuho Bank</option>
                </select>
              </th>
              <th>
              <label for="occurance">filter by occurance</label>
                <select name="occurance" type="select" >
                  <option></option>
                  <option>After Ho</option>
                  <option>Before Ho</option>
                </select>
              </th>
              
              <th>
              <label for="position">filter by position</label>
                <select name="position" type="select">
                  <option></option>
                  <option>Ceileing</option>
                  <option>Exterior</option>
                  <option>Wall</option>
                </select>
              </th>
              <th>
              <label for="phenomenon">filter by phenomenon</label>
                <select name="phenomenon" type="select">
                  <option></option>
                  <option>Cracks</option>
                  <option>Fall</option>
                  <option>Malfunction</option>
                </select>
              </th>
              <th>
              <label for="disrurbance">filter by disrurbance</label>
                <select name="disrurbance" type="select" >
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </th>
              <th>
              <label for="responsible">filter by responsible</label>
                <select name="responsible" type="select">
                  <option></option>
                  <option>TAKENAKA</option>
                  <option>SUB-CON</option>
                </select>
              </th>
              <th>
              <label for="status">filter by status</label>
                <select name="status" type="select" >
                  <option></option>
                  <option>Completed</option>
                  <option>Ongoing</option>
                  <option>Closed</option>
                </select>
              </th>
              <th>
              <label for="level">filter by level</label>
                <select name="level" type="select" id="level">
                  <option></option>
                  <option>i</option>
                  <option>ii</option>
                  <option>iii</option>
                </select>
              </th>
            </tr>
          </thead>
          <ReactTableHeader
            headerGroups={headerGroups}
            isSortable={isSortable}
            isResizable={isResizable}
          />
          <BodyReactTable
            page={page}
            getTableBodyProps={getTableBodyProps}
            prepareRow={prepareRow}
            updateDraggableData={updateDraggableData}
            updateEditableData={updateEditableData}
            isEditable={isEditable}
            withDragAndDrop={withDragAndDrop}
          />
          {(pageCount === pageIndex + 1 ||
            (!withPagination && rows.length !== 0)) && (
            <ReactTableFooter footerGroups={footerGroups} />
          )}
        </table>
      </div>
      {withPagination && rows.length > 0 && (
        <ReactTablePagination
          page={page}
          gotoPage={gotoPage}
          previousPage={previousPage}
          nextPage={nextPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageSize={pageSize}
          pageIndex={pageIndex}
          pageCount={pageCount}
          setPageSize={setPageSize}
          manualPageSize={manualPageSize}
          dataLength={dataLength}
        />
      )}
    </div>
  );
};

ReactTableConstructor.propTypes = {
  tableConfig: PropTypes.shape({
    isEditable: PropTypes.bool,
    isResizable: PropTypes.bool,
    isSortable: PropTypes.bool,
    withDragAndDrop: PropTypes.bool,
    withPagination: PropTypes.bool,
    withSearchEngine: PropTypes.bool,
    manualPageSize: PropTypes.arrayOf(PropTypes.number),
    placeholder: PropTypes.string,
  }),
  tableOptions: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    data: PropTypes.arrayOf(PropTypes.shape()),
    setFilterValue: PropTypes.func,
    updateData: PropTypes.func,
    defaultColumn: PropTypes.oneOfType([
      PropTypes.any,
      PropTypes.shape({
        Cell: PropTypes.func,
      }).isRequired,
    ]),
    isEditable: PropTypes.bool,
    withDragAndDrop: PropTypes.bool,
    dataLength: PropTypes.number,
    initialState: {
      pageIndex: PropTypes.number,
      pageSize: PropTypes.number,
    },
  }),
  tableOptionalHook: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

ReactTableConstructor.defaultProps = {
  tableConfig: {
    isEditable: false,
    isResizable: false,
    isSortable: false,
    withDragAndDrop: false,
    withPagination: false,
    withSearchEngine: false,
    manualPageSize: [10, 20, 30, 40],
    placeholder: "Search...",
  },
  tableOptions: [
    {
      columns: [],
      data: [],
      isEditable: PropTypes.bool,
      setFilterValue: () => {},
      updateData: () => {},
      defaultColumn: [],
      withDragAndDrop: false,
      dataLength: null,
      autoResetPage: false,
      disableSortBy: false,
      manualSortBy: false,
      manualGlobalFilter: false,
      manualPagination: false,
      initialState: {
        pageIndex: null,
        pageSize: null,
      },
    },
  ],
};

export default ReactTableConstructor;
