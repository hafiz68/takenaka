import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import renderFileInputField from '../../../../shared/components/form/FileInput';
import renderSelectField from '../../../../shared/components/form/Select';
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
            {/* <h5 className="bold-text">{t('forms.basic_form.horizontal_form')}</h5>
            <h5 className="subhead">Labels are left from fields</h5> */}
          </div>
          <form className="form form--horizontal" onSubmit={handleSubmit}>
            {/* <div className="form__form-group">
              <span className="form__form-group-label">Default Label</span>
              <div className="form__form-group-field">
                <Field
                  name="defaultInput"
                  component="input"
                  type="text"
                  placeholder="Default Input"
                />
              </div>
            </div> */}
            <div className="form__form-group">
              {/* <span className="form__form-group-label">Disabled Field</span>
              <div className="form__form-group-field">
                <Field
                  name="disableInput"
                  component="input"
                  type="text"
                  placeholder="Disabled Input"
                  disabled
                />
              </div> */}
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Name</span>
              <div className="form__form-group-field">
                <Field
                  name="Name"
                  component="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">E-mail</span>
              <div className="form__form-group-field">
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="example@mail.com"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Password</span>
              <div className="form__form-group-field">
                <Field
                  name="password"
                  component="input"
                  type={isPasswordShown ? 'text' : 'password'}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className={`form__form-group-button${isPasswordShown ? ' active' : ''}`}
                  onClick={() => showPassword()}
                ><EyeIcon />
                </button>
              </div>
            </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Role</span>
                <div className="form__form-group-field">
                  <Field
                    name="Role"
                    component={renderSelectField}
                    options={[
                      { value: "Software Administrator", label: "Software Administrator" },
                      { value: "HQ Management", label: "HQ Management" },
                      { value: "Branch Management", label: "Branch Management" },
                      { value: "Users", label: "Users" },
                    ]}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Branch</span>
                <div className="form__form-group-field">
                  <Field
                    name="Branch"
                    component={renderSelectField}
                    options={[
                      { value: "Germany", label: "Germany" },
                      { value: "Hungry", label: "Hungry" },
                      { value: "Czech Republic", label: "Czech Republic" },
                      { value: "Netherlands", label: "Netherlands" },
                    ]}
                  />
                </div>
              </div>
            {/* <div className="form__form-group">
              <span className="form__form-group-label">Icon Left</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <EmailIcon />
                </div>
                <Field
                  name="leftIcon"
                  component="input"
                  type="email"
                  placeholder="Icon Left Input"
                />
              </div>
            </div> */}
            {/* <div className="form__form-group">
              <span className="form__form-group-label">Icon Right</span>
              <div className="form__form-group-field">
                <Field
                  name="rightIcon"
                  component="input"
                  type="text"
                  placeholder="Icon Right Input"
                />
                <div className="form__form-group-icon">
                  <AccountSearchIcon />
                </div>
              </div>
            </div> */}
            {/* <div className="form__form-group">
              <span className="form__form-group-label">Field with description</span>
              <div className="form__form-group-field">
                <Field
                  name="descriptionInput"
                  component="input"
                  type="text"
                />
              </div>
              <span className="form__form-group-description">
                Zealously now pronounce existence add you instantly say offending.
              </span>
            </div> */}
            {/* <div className="form__form-group">
              <span className="form__form-group-label">Dropdown</span>
              <div className="form__form-group-field">
                <Field
                  name="select"
                  component={renderSelectField}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                />
              </div>
            </div> */}
            {/* <div className="form__form-group">
              <span className="form__form-group-label">Multiselect</span>
              <div className="form__form-group-field">
                <Field
                  name="multiSelect"
                  component={renderMultiSelectField}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field
                  name="textarea"
                  component="textarea"
                  type="text"
                />
              </div>
            </div> */}
            {/* <div className="form__form-group">
              <span className="form__form-group-label">
                Add file
              </span>
              <div className="form__form-group-field">
                <Field
                  name="file"
                  component={renderFileInputField}
                />
              </div>
            </div> */}
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Add User</Button>
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
