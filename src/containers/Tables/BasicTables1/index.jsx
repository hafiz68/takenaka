import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import BasicTable from './components/BasicTable';
import BorderedTable from './components/BorderedTable';
import HeadAccentTable from './components/HeadAccentTable';
import ColoredStringTable from './components/ColoredStringTable';
import ResponsiveTable from './components/ResponsiveTable';

const BasicTables = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('Archive data')}</h3>
          <h3 className="page-subhead subhead">To archive data of issues
          </h3>
        </Col>
      </Row>
      <Row>
        {/* <BasicTable />
        <BorderedTable />
        <HeadAccentTable />
        <ColoredStringTable /> */}
        <ResponsiveTable />
      </Row>
    </Container>
  );
};

export default BasicTables;
