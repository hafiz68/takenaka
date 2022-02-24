import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Badge, Table, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import BasicTableData from './BasicTableData';
import {FaFileArchive} from 'react-icons/fa';
const { tableHeaderResponsiveData, tableRowsData } = BasicTableData();

const ResponsiveTable = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            {/* <h5 className="bold-text">{t('tables.basic_tables.responsive_table')}</h5>
            <h5 className="subhead">Use default table with property <span className="red-text">responsive</span></h5> */}
            <Link to='/forms/simple_form'><Button type='warning' >Add new project</Button></Link>
                  </div>
          <Table responsive className="table--bordered">
            <thead>
              <tr>
                {tableHeaderResponsiveData.map(item => (
                  <th key={item.id}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRowsData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.Project}</td>
                  <td>{item.Project}</td>
                  <td>{item.date}</td>
                  <td>{item.username}</td>
                  {/* <td>{item.age}</td> */}
                  <td>{item.location}</td>
                  <td><Badge color={item.status_resp}>{item.badge_resp}</Badge></td>
                  <td><Link to='/tables/basic_tables1'><button className='arch-data' ><FaFileArchive size={20}/></button></Link></td>
                  <td><Link to='/tables/data_table_issue'><Button type='warning' >View</Button></Link></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ResponsiveTable;
