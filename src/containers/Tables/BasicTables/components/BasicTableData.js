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
    // { id: 5, title: 'Age' },
    { id: 7, title: 'Date' },
    { id: 8, title: 'Project Manager' },
    { id: 8, title: 'Architect' },
    { id: 4, title: 'Site Manager' },
    { id: 9, title: 'Status' },
    { id: 10, title: 'Archive Data' },
    { id: 11, title: 'Issues' },
    { id: 12, title: 'Export' },
    
  ];

  const rows = [{
    id: 1,
    Company: 'Takenaka',
    Project: 'DE Matika Ratingen',
    username: '@dragon',
    status: 'success',
    badge: 'Work',
    age: '21',
    date: '1990/12/01',
    location: 'John',
    status_resp: 'success',
    badge_resp: 'In Progress',
  }, {
    id: 2,
    Company: 'Takenaka',
    Project: 'DE Fuji Oil',
    username: '@boboby',
    status: 'warning',
    badge: 'Vacation',
    age: '35',
    date: '1992/12/01',
    location: 'Jack',
    status_resp: 'primary',
    badge_resp: 'Completed',
  }, {
    id: 3,
    Company: 'Takenaka',
    Project: 'DE Mizuho Bank',
    username: '@medimedi',
    status: 'warning',
    badge: 'Vacation',
    age: '21',
    date: '1975/12/01',
    location: 'Xinhua',
    status_resp: 'success',
    badge_resp: 'In Progress',
  }, {
    id: 4,
    Company: 'Takenaka',
    Project: 'DE Matika Halle',
    username: '@lori',
    status: 'success',
    badge: 'Work',
    age: '44',
    date: '1978/12/01',
    location: 'Ali',
    status_resp: 'primary',
    badge_resp: 'Completed',
  }];

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: headerResponsive, tableRowsData: rows };
  return basicTableData;
};

export default BasicTableData;
