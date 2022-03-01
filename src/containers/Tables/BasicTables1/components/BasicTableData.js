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
    Project: 'DE Mando Frankfurt',
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
    Project: 'DE Mizuho Bank',
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
    Project: 'DE Fuji Oil',
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
    Project: 'DE Matika Halle',
    username: '@lori',
    status: 'success',
    badge: 'Work',
    age: '44',
    date: '1978/12/01',
    location: 'Melbourne',
    status_resp: 'success',
    badge_resp: 'Download',
    badge_del: <AiFillDelete/>,
  }];

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: headerResponsive, tableRowsData: rows };
  return basicTableData;
};

export default BasicTableData;
