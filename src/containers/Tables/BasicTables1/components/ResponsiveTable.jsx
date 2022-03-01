import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Badge, Table, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import BasicTableData from './BasicTableData';
import {MdUnarchive} from 'react-icons/md'

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
                  <td>{item.Company}</td>
                  <td>{item.Project}</td>
                  {/* <td>{item.username}</td>
                  <td>{item.age}</td> */}
                  <td>{item.date}</td>
                  <td>{item.location}</td>
                  <td><button  className='unarch-btn'><MdUnarchive size={25}/></button></td>
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
