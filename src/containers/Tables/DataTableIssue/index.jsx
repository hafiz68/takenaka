import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import DataReactTable from './components/DataReactTable';
import CreateTableData from '../CreateData';
import { Link } from 'react-router-dom';

const DataTable = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}><div><h3 className="page-title">{t('User Management')}</h3>
            <h3 className="page-subhead subhead">Add and check your users here
            </h3></div>
            <div className='add-btn'>
              <Link to="/forms/basic_formissue" ><button style={{ height: "40px", border: '1px solid white', color: 'white', backgroundColor: '#932239', borderRadius: '10px' }}>Add Issue</button></Link>
              </div></div>
        </Col>
      </Row>
      <Row>
        <DataReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default DataTable;
