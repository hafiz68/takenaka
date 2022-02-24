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
    { id: 2, title: 'Company' },
    { id: 3, title: 'Project' },
    // { id: 4, title: 'Username' },
    // { id: 5, title: 'Age' },
    { id: 7, title: 'Date' },
    { id: 8, title: 'Location' },
    { id: 9, title: 'Unarchive' },

  ];

  const rows = [{
    id: 1,
    Company: 'Europe',
    Project: 'Morisson',
    username: '@dragon',
    status: 'success',
    badge: 'Work',
    age: '21',
    date: '1990/12/01',
    location: 'Melbourne',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/> ,
  }, {
    id: 2,
    Company: 'Europe',
    Project: 'Brown',
    username: '@boboby',
    status: 'warning',
    badge: 'Vacation',
    age: '35',
    date: '1992/12/01',
    location: 'Tokio',
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
    location: 'Moscow',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/>,
  }, {
    id: 4,
    Company: 'Europe',
    Project: 'Lori',
    username: '@lori',
    status: 'success',
    badge: 'Work',
    age: '44',
    date: '1978/12/01',
    location: 'Melbourne',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/>,
  }, {
    id: 5,
    Company: 'Europe',
    Project: 'Morisson',
    username: '@dragon',
    status: 'success',
    badge: 'Work',
    age: '25',
    date: '1992/12/01',
    location: 'London',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/>,
  }, {
    id: 6,
    Company: 'Europe',
    Project: 'Brown',
    username: '@boboby',
    status: 'warning',
    badge: 'Vacation',
    age: '29',
    date: '1988/12/01',
    location: 'Rome',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/>,
  }, {
    id: 7,
    Company: 'Europe',
    Project: 'Medinberg',
    username: '@medimedi',
    status: 'warning',
    badge: 'Vacation',
    age: '38',
    date: '1984/12/01',
    location: 'Vienna',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/>,
  }];

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: headerResponsive, tableRowsData: rows };
  return basicTableData;
};

export default BasicTableData;
