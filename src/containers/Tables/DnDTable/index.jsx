import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import DnDTable from './components/DnDReactTable';
import CreateTableData from '../CreateData';
import BasicHeadings from '../../UI/Typography/components/BasicHeadings'

const DragAndDropTable = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('Role management')}</h3>
          <h3 className="page-subhead subhead">Responsibilities of Roles
          </h3>
        </Col>
      </Row>
      <Row>
        {/* <DnDTable reactTableData={reactTableData} /> */}
        <BasicHeadings
          headLg="1. Software Administrator"
          headSub="Following are the activities are included in the responsibility of Software Administrator:"
          contentOne="i.  Manage log files"
          contentTwo="ii.  Activities for all back-end data management"
          contentThree=""
          contentFour=""

        />
        <BasicHeadings
          headLg="2.  HQ Management"
          headSub="Following are the activities are included in the responsibility of HQ Management:"
          contentOne="i.  Receive e-mail notices"
          contentTwo='ii.  Evaluate "Level" of priority for the issues and e-mails'
          contentThree="iii.  Monitor the activities that fall under the specified role"
          contentFour=""

        />
        <BasicHeadings
          headLg="3.  Branch Management "
          headSub="Following are the activities are included in the responsibility of Branch Management:"
          contentOne="i. Approve closing of issues"
          contentTwo="ii.  Monitor the activities that fall under the specified role or Tasks assign to the user."
          contentThree=""
          contentFour=""

        />
        <BasicHeadings
          headLg="4.  Users"
          headSub="Following are the activities are included in the responsibility of Users (PM / Site Manager):"
          contentOne="i.  Update the content of Issues"
          contentTwo="ii.  Apply for the closing of Tasks"
          contentThree=""
          contentFour=""

        />
      </Row>
    </Container>
  );
};

export default DragAndDropTable;
