import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import renderDatePickerField from '../../../../shared/components/form/DatePicker';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import renderFileInputField from '../../../../shared/components/form/FileInput';
import renderSelectField from '../../../../shared/components/form/Select';
import renderDropZoneField from '../../../../shared/components/form/DropZone';
import { FaMicrophoneAlt } from 'react-icons/fa';
import Collapse from '../../../../shared/components/Collapse';
import renderMultiSelectField from '../../../../shared/components/form/MultiSelect';

const HorizontalForm = ({ handleSubmit, reset }) => {
  const { t } = useTranslation('common');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('QPIS')}</h5>
            <h5 className="subhead">Put values to add QPIS</h5>
          </div>
          <form className="form form--horizontal" onSubmit={handleSubmit}>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Branch</span>
                <div className="form__form-group-field">
                  <Field
                    name="email"
                    component="input"
                    type="text"
                    placeholder="Branch"
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Client</span>
                <div className="form__form-group-field">
                  <Field
                    name="description"
                    component="input"
                    type="descrption"
                    placeholder="Client"
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Project</span>
                <div className="form__form-group-field">
                  <Field
                    name="Project"
                    component={renderSelectField}
                    placeholder="TAKENAKA"
                    options={[
                      { value: 'Takenaka', label: 'TAKENAKA' },
                      { value: 'de matika', label: 'DE MATEKA' },
                      
                    ]}
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Occurrence</span>
                <div className="form__form-group-field">
                  <Field
                    name="Occurrence"
                    component={renderSelectField}
                    options={[
                      { value: 'before', label: 'Before HO' },
                      { value: 'after', label: 'After HO' },
                    ]}
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Position</span>
                <div className="form__form-group-field">
                  <Field
                    name="Position"
                    component={renderSelectField}
                    options={[
                      { value: 'one', label: 'Walls' },
                      { value: 'two', label: 'Ceiling' },
                    ]}
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Phenomenon</span>
                <div className="form__form-group-field">
                  <Field
                    name="Phenomenon"
                    component={renderSelectField}
                    options={[
                      { value: 'one', label: 'Cracks' },
                      { value: 'two', label: 'Leakage' },
                    ]}
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Disturbance</span>
                <div className="form__form-group-field">
                  <Field
                    name="Disturbance"
                    component={renderSelectField}
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                    ]}
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Responsibility</span>
                <div className="form__form-group-field">
                  <Field
                    name="Responsibility"
                    component={renderSelectField}
                    options={[
                      { value: 'Any', label: 'Any' },
                      { value: 'Some', label: 'Some' },
                    ]}
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Status</span>
                <div className="form__form-group-field">
                  <Field
                    name="Status"
                    component={renderSelectField}
                    options={[
                      { value: 'one', label: 'Completed' },
                      { value: 'two', label: 'Ongoing' },
                    ]}
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Head line:</span>
                <div className="form__form-group-field">
                  <Field
                    name="Cc"
                    component="input"
                    type="text"
                    placeholder="Head line:"
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Project Code:</span>
                <div className="form__form-group-field">
                  <Field
                    name="Cc"
                    component="input"
                    type="text"
                    placeholder="Project Code:"
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Designed by:</span>
                <div className="form__form-group-field">
                  <Field
                    name="Cc"
                    component="input"
                    type="text"
                    placeholder="Designed by:"
                  />
                </div>
              </div></Col>
            <div className="card__title">
              <h5 className="bold-text">{t('What Happened')}</h5>
              <h5 className="subhead">Place the pictures here</h5>
            </div>
            <Col sm={12} md={12} lg={12}>
              <form className="form" onSubmit={handleSubmit}>
                <Field
                  name="files"
                  component={renderDropZoneField}
                  customHeight
                />
              </form>
            </Col>
            <div className="card__title">
              <h5 className="bold-text">{t('PROBLEM/ CAUSES')}</h5>
              {/* <h5 className="subhead">Place the pictures here</h5> */}
            </div>
            <Col sm={12} md={12} lg={12}>
            <div className="form__form-group">
                <span className="form__form-group-label"><h5>WHY</h5></span>
                <div className="form__form-group-field">
                  <Field
                    name="Cc"
                    component="input"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <div className="form__form-group">
                <span className="form__form-group-label">SUB CONTRACTOR (PRODUCT):</span>
                <div className="form__form-group-field">
                  <Field
                    name="SUB CONTRACTOR (PRODUCT)"
                    component="input"
                    type="text"
                    placeholder="SUB CONTRACTOR (PRODUCT)"
                  />
                </div>
              </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">PROBLEM NO:</span>
                <div className="form__form-group-field">
                  <Field
                    name="PROBLEM NO"
                    component="input"
                    type="text"
                    placeholder="PROBLEM NO"
                  />
                </div>
              </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">LEVEL OF QUALITY PROBLEM</span>
                <div className="form__form-group-field">
                  <Field
                    name="LEVEL OF QUALITY PROBLEM"
                    component="input"
                    type="text"
                    placeholder="LEVEL OF QUALITY PROBLEM"
                  />
                </div>
              </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">INFO NUM:</span>
                <div className="form__form-group-field">
                  <Field
                    name="Info Num"
                    component="input"
                    type="text"
                    placeholder="Info Num"
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">DATE OCCUR:</span>
                <div className="form__form-group-field">
                  <Field
                    name="default_date"
                    component={renderDatePickerField}
                    type="text"
                    placeholder="yyyy/mm/dd"
                  />
                  <div className="form__form-group-icon">
                    <CalendarBlankIcon />
                  </div>
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">DEFECT GROUP</span>
                <div className="form__form-group-field">
                  <Field
                    name="DEFECT GROUP"
                    component={renderSelectField}
                    options={[
                      { value: 'position', label: 'Position' },
                      { value: 'phenomenon', label: 'Phenomenon' },
                    ]}
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">SUBSIDARY:</span>
                <div className="form__form-group-field">
                  <Field
                    name="SUBSIDARY"
                    component="input"
                    type="text"
                    placeholder="SUBSIDARY"
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">DATE OF ISSUE BEY</span>
                <div className="form__form-group-field">
                  <Field
                    name="default_date"
                    component={renderDatePickerField}
                    type="text"
                    placeholder="yyyy/mm/dd"
                  />
                  <div className="form__form-group-icon">
                    <CalendarBlankIcon />
                  </div>
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">BUILD USE:</span>
                <div className="form__form-group-field">
                  <Field
                    name="BUILD USE"
                    component="input"
                    type="text"
                    placeholder="BUILD USE"
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">YEAR OF COMPLETION</span>
                <div className="form__form-group-field">
                  <Field
                    name="Cc"
                    component="input"
                    type="text"
                    placeholder="Head line:"
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">OFFICIAL LETTER:</span>
                <div className="form__form-group-field">
                  <Field
                    name="OFFICIAL LETTER"
                    component="input"
                    type="text"
                    placeholder="OFFICIAL LETTER"
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">AFFECTED PART:</span>
                <div className="form__form-group-field">
                  <Field
                    name="AFFECTED PART"
                    component="input"
                    type="text"
                    placeholder="AFFECTED PART"
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">IMPACT:</span>
                <div className="form__form-group-field">
                  <Field
                    name="IMPACT"
                    component="input"
                    type="text"
                    placeholder="IMPACT"
                  />
                </div>
              </div></Col>
              <Col sm={12} md={12} lg={12}>
              <div className="form__form-group">
                <span className="form__form-group-label">APPLICATION FOR WARRANTY WORK:</span>
                <div className="form__form-group-field">
                  <Field
                    name="APPLICATION FOR WARRANTY WORK"
                    component="input"
                    type="text"
                    placeholder="APPLICATION FOR WARRANTY WORK"
                  />
                </div>
              </div>
              </Col>
              <Col sm={12} md={12} lg={12}>
              <div className="form__form-group">
                <span className="form__form-group-label">DISCRIPTION OF WORK:</span>
                <div className="form__form-group-field">
                  <Field
                    name="DISCRIPTION OF WORK"
                    component="input"
                    type="text"
                    placeholder="DISCRIPTION OF WORK"
                  />
                </div>
              </div>
              </Col>
              <Col sm={12} md={12} lg={12}>
              <div className="form__form-group">
                <span className="form__form-group-label">CAUSE OF MALFUCTION:</span>
                <div className="form__form-group-field">
                  <Field
                    name="CAUSE OF MALFUCTION"
                    component="input"
                    type="text"
                    placeholder="CAUSE OF MALFUCTION"
                  />
                </div>
              </div>
              </Col>
              <Col sm={12} md={12} lg={12}>
              <div className="form__form-group">
                <span className="form__form-group-label">MEASURES TAKEN:</span>
                <div className="form__form-group-field">
                  <Field
                    name="MEASURES TAKEN"
                    component="input"
                    type="number"
                    placeholder="MEASURES TAKEN"
                  />
                </div>
              </div>
              </Col>
              <div className="card__title">
              <h5 className="bold-text">{t('MEASURES TAKEN')}</h5>
              <h5 className="subhead">HOW REPAIRED</h5>
            </div>
            <Col sm={12} md={12} lg={12}>
              <form className="form" onSubmit={handleSubmit}>
                <Field
                  name="files"
                  component={renderDropZoneField}
                  customHeight
                />
              </form>
            </Col>
            <div className="card__title">
              <h5 className="bold-text">{t('MEASURES TAKEN')}</h5>
              {/* <h5 className="subhead">HOW REPAIRED</h5> */}
            </div>
            <Col sm={12} md={12} lg={12}>
              <div className="form__form-group">
                <span className="form__form-group-label"><h5>WHO:</h5></span>
                <div className="form__form-group-field">
                  <Field
                    name="WHO"
                    component="input"
                    type="text"
                    placeholder="WHO"
                  />
                </div>
              </div>
              </Col>
              <Col sm={12} md={12} lg={12}>
              <div className="form__form-group">
                <span className="form__form-group-label"><h5>WHAT:</h5></span>
                <div className="form__form-group-field">
                  <Field
                    name="WHAT"
                    component="input"
                    type="text"
                    placeholder="WHAT"
                  />
                </div>
              </div>
              </Col>
              <Col sm={12} md={12} lg={12}>
              <div className="form__form-group">
                <span className="form__form-group-label"><h5>HOW:</h5></span>
                <div className="form__form-group-field">
                  <Field
                    name="HOW"
                    component="input"
                    type="text"
                    placeholder="HOW"
                  />
                </div>
              </div>
              </Col>
              {/* <div className="card__title"> */}
              {/* <h5 className="bold-text">{t('MEASURES TAKEN')}</h5> */}
              <h5 style={{fontWeight:"800", paddingBottom: "10px"}}>WARRANTY WORK APPLICATION NUMBER:</h5>
            {/* </div> */}
              <Col sm={12} md={12} lg={12}>
              <div className="form__form-group">
                <span className="form__form-group-label"><h5></h5></span>
                <div className="form__form-group-field">
                  <Field
                    name="WARRANTY WORK"
                    component="input"
                    type="text"
                    placeholder="WARRANTY WORK APPLICATION NUMBER"
                  />
                </div>
              </div>
              </Col>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Submit</Button>
              <Button type="button" onClick={reset}>
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

HorizontalForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(HorizontalForm);
