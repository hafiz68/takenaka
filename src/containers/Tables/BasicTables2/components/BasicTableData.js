import React from 'react';
import {AiFillDelete} from 'react-icons/ai'

const BasicTableData = () => {
  const header = [
    { id: 1, title: '#' },
    { id: 2, title: 'First Name' },
    { id: 3, title: 'Last Name' },
    { id: 4, title: 'Username' },
    { id: 5, title: 'Status' },
  ];

  const headerResponsive = [
    { id: 1, title: '#' },
    { id: 2, title: 'Branch' },
    { id: 3, title: 'Project' },
    { id: 4, title: 'Responsible Person' },
    // { id: 5, title: 'Age' },
    // { id: 7, title: 'Date' },
    { id: 8, title: 'Action Perform' },
    // { id: 9, title: 'Actions' },

  ];

  const rows = [{
    id: 1,
    Company: 'Belgium',
    Project: 'Morisson',
    username: '@dragon',
    status: 'success',
    badge: 'Work',
    age: '21',
    date: '1990/12/01',
    location: 'Isuue# 0001 Status updated',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/> ,
  }, {
    id: 2,
    Company: 'France',
    Project: 'Brown',
    username: '@boboby',
    status: 'warning',
    badge: 'Vacation',
    age: '35',
    date: '1992/12/01',
    location: 'Isuue# 0006 Status updated',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/>,
  }, {
    id: 3,
    Company: 'Europe',
    Project: 'Medinberg',
    username: '@medimedi',
    status: 'warning',
    badge: 'Vacation',
    age: '21',
    date: '1975/12/01',
    location: 'Created Issue#3 in project# 0002',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/>,
  }, {
    id: 4,
    Company: 'Germany',
    Project: 'Lori',
    username: '@lori',
    status: 'success',
    badge: 'Work',
    age: '44',
    date: '1978/12/01',
    location: 'Issues# 5 updated',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/>,
  }, {
    id: 5,
    Company: 'Italy',
    Project: 'Morisson',
    username: '@dragon',
    status: 'success',
    badge: 'Work',
    age: '25',
    date: '1992/12/01',
    location: 'Created Issue#5 in project# 0002',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/>,
  }];

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: headerResponsive, tableRowsData: rows };
  return basicTableData;
};

export default BasicTableData;
