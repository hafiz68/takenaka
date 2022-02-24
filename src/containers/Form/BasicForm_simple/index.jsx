import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import HorizontalForm from './components/HorizontalForm';
import VerticalForm from './components/VerticalForm';
import showResults from '../Show';

const BasicForm = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('Projects')}</h3>
          {/* <h3 className="page-subhead subhead">Add information to add User
          </h3> */}
        </Col>
      </Row>
      <Row>
        <HorizontalForm onSubmit={showResults} />
      </Row>
      {/* <Row>
        <VerticalForm onSubmit={showResults} />
      </Row> */}
    </Container>
  );
};

export default BasicForm;
