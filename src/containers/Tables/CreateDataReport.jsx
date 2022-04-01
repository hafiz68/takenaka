import React, { useMemo } from 'react';
import { UserProps } from '../../shared/prop-types/ReducerProps';
import PropTypes from 'prop-types';
import { GoDesktopDownload } from "react-icons/go";



const CreateTableData = () => {
  const columns = useMemo(
    () => [
      {
        i: 'id',
        accessor: 'id',
      },
      {
        Header: 'Branch',
        accessor: 'Branch',
      },
      {
        Header: 'Client',
        accessor: 'Client',
      },
      {
        Header: 'Project',
        accessor: 'Project',
      },
      {
        Header: 'issueId',
        accessor: 'issueId',
      },
      {
        Header: 'Issue Name',
        accessor: 'IssueName',
      },
      {
        Header: 'Occurance',
        accessor: 'Occurance',
      },
      {
        Header: 'Position',
        accessor: 'Position',
      },
      {
        Header: 'Phenomenon',
        accessor: 'Phenomenon',
      },
      {
        Header: 'Disturbance',
        accessor: 'Disturbance',
      },
      {
        Header: 'Responsibility',
        accessor: 'Responsibility',
      },
      {
        Header: 'status',
        accessor: 'status',
      },
      {
        Header: 'Level',
        accessor: 'Level',
      },
      {
        Header: 'Download',
        accessor: 'Download',
      },
    ],
    [],
  );

  const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();
  const data = [];
  const rows = () => {
    for (let i = 1; i < 5; i += 1) {
      data.push({
        id: i,
        Branch: ['Belgium', 'Czech republic  ', 'France', 'Germany'][Math.floor((Math.random() * 3))],
        Client: ['Morrison', 'Brown  ', 'Medinberg'][Math.floor((Math.random() * 3))],
        Project: ['DE Matika Ratingen', 'DE Fuji Oil', 'DE Matika Halle', 'DE Mizuho Bank'][Math.floor((Math.random() * 3))],
        issueId: ['001', '002', '003', '004'][Math.floor((Math.random() * 3))],
        IssueName: ['Czech Republic', 'Belgium', 'Germany', 'France'][Math.floor((Math.random() * 3))],
        // age: Math.min(100, Math.round(Math.random() * 30) + 20),
        // date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
        Occurance: ['Before Ho', 'After Ho'][Math.floor((Math.random() * 2))],
        Position: ['Roof', 'Wall', 'Ceiling', 'Exterior', 'Plumbing'][Math.floor((Math.random() * 5))],
        Phenomenon: ['Rain leakage', 'Leakage', 'Cracks', 'Fall', 'MalFunction'][Math.floor((Math.random() * 5))],
        Disturbance: ['Yes', 'No'][Math.floor((Math.random() * 2))],
        Responsibility: ['TAKENAKA', 'SUB-CON'][Math.floor((Math.random() * 2))],
        status: ['On-Going', 'Completed', 'Closed'][Math.floor((Math.random() * 3))],
        Level: ['i', 'ii', 'iii'][Math.floor((Math.random() * 2))],
      });
    }
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};


export default CreateTableData;
