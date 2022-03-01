import React, { useMemo } from 'react';
import { UserProps } from '../../shared/prop-types/ReducerProps';
import PropTypes from 'prop-types';


const CreateTableData = () => {
  const columns = useMemo(
    () => [
      // {
      //   Header: '#',
      //   accessor: 'id',
      //   Footer: 'Middle age:',
      //   disableGlobalFilter: true,
      //   width: 65,
      // },
      {
        Header: 'First Name',
        accessor: 'first',
      },
      {
        Header: 'Last Name',
        accessor: 'last',
        disableGlobalFilter: true,
      },
      {
        Header: 'Username',
        accessor: 'user',
        disableGlobalFilter: true,
      },
      // {
      //   Header: 'Age',
      //   accessor: 'age',
      //   disableGlobalFilter: true,
      //   Footer: (info) => {
      //     const totalAge = useMemo(
      //       () => info.rows.reduce((sum, row) => Number(row.values.age) + sum, 0),
      //       [info.rows],
      //     );
      //     const age = Math.round(totalAge / info.flatRows.length);
      //     return <span>{age}</span>;
      //   },
      // },
      // {
      //   Header: 'DOB',
      //   accessor: 'date',
      //   disableGlobalFilter: true,
      // },
      {
        Header: 'Branch',
        accessor: 'location',
        disableGlobalFilter: true,
      },
      {
        Header: 'Role',
        accessor: 'role',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
    ],
    [],
  );

  const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  const data = [];
  const rows = () => {
    for (let i = 1; i < 6; i += 1) {
      data.push({
        id: i,
        first: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
        last: ['Morrison', 'Brown  ', 'Medinberg'][Math.floor((Math.random() * 3))],
        user: ['@dragon', '@hamster', '@cat'][Math.floor((Math.random() * 3))],
        // age: Math.min(100, Math.round(Math.random() * 30) + 20),
        // date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
        location: ['Belgium', 'Czech Republic', 'Netherlands', 'Hungry'][Math.floor((Math.random() * 4))],
        role: ['Manager', 'Head Manager', 'Architect', 'Admin', 'Project Manager'][Math.floor((Math.random() * 5))],
      });
    }
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};


export default CreateTableData;
