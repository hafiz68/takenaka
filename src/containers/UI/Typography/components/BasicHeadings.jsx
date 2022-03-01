import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, CardBody, Col } from 'reactstrap';
import UpdateModals from '../../../Tables/DnDTable/components/updateModal';


const BasicHeadings = ({headLg,headSub,contentOne,contentTwo,contentThree,contentFour}) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            {/* <h5 className="bold-text">{t('ui_elements.typography.basic_heading')}</h5>
            <h5 className="subhead">Use tags <span className="red-text">h1 to h5</span> for get necessary heading.
            </h5> */}
          </div>
          <div className="typography-card">
            {/* <h1>H1 Type something </h1> */}
            <h3>{headLg}</h3>
            {/* <h3>H3 Type something </h3> */}
            <h4>{headSub}</h4>
             <h5>{contentOne}<br></br>
             {contentTwo} <br></br>
             {contentThree}<br></br>
             {contentFour}</h5>
             <UpdateModals/>
            {/* <h5>H5 Type something </h5> */}
            {/* <h5>h5 Type something </h5> */}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicHeadings;
