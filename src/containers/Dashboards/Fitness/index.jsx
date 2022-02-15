import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row, Card, CardBody, ButtonToolbar, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import HeartRate from './components/HeartRate';
import CaloriesBurn from './components/CaloriesBurn';
import Steps from './components/Steps';
import Distance from './components/Distance';
import ActivityChart from './components/ActivityChart';
import TodayRunningMap from './components/TodayRunningMap';
import MyCompetitors from './components/MyCompetitors';
import FatBurning from './components/FatBurning';
import ActivityRating from './components/ActivityRating';
import {FaUpload, FaMicrophoneAlt} from 'react-icons/fa';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';
import renderDropZoneField from '../../../shared/components/form/DropZone';


const FitnessDashboard = ({ rtl }) => {
  const { t } = useTranslation('common');

  return (
    <Container className="dashboard">
      {/* <Row>
        <Col md={12}>
          <h3 className="page-title">{t('fitness_dashboard.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <HeartRate />
        <CaloriesBurn />
        <Steps />
        <Distance />
      </Row>
      <Row>
        <ActivityChart dir={rtl.direction} />
        <TodayRunningMap />
        <MyCompetitors />
        <FatBurning dir={rtl.direction} />
        <ActivityRating dir={rtl.direction} />
      </Row> */}
      <Row>
        {/* <Col md={12} lg={6}>
          <Card className="card--not-full-height">
            <CardBody>
              <div className="card__title">
                <h5 className="bold-text">{t('forms.file_upload.file_upload_default')}</h5>
                <h5 className="subhead">Drag you file here</h5>
              </div>
              <form className="form" >
                <div id="dropContainer" style={{border:'1px solid rgba(0,0,0,0.2)', height:'200px', width: '100%'}}>
                 <FaUpload size={30}/> Drop Here
                </div>
                <input type="file" id="fileInput" />
                <ButtonToolbar className="form__button-toolbar">
                  <Button color="primary" type="submit">Submit</Button>
                  <Button type="reset" >
                    Cancel
                  </Button>
                </ButtonToolbar>
              </form>
            </CardBody>
          </Card>
        </Col> */}
        <div className='crd-top'>
        <Col xs={12} md={10} lg={10}><Card className="card--not-full-height">
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('Tap to record')}</h5>
              <h5 className="subhead">Record and tap submit button</h5>
            </div>
            <form className="form" >
            <button id="dropContainer1" style={{height:'200px', width: '100%'}}>
                <FaMicrophoneAlt size={100}/>
                </button>
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Button type="reset" >
                  Cancel
                </Button>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card></Col>
        </div>
      </Row>
    </Container>
  );
};

FitnessDashboard.propTypes = {
  rtl: RTLProps.isRequired,
};

export default compose(connect(state => ({
  rtl: state.rtl,
})))(FitnessDashboard) 
