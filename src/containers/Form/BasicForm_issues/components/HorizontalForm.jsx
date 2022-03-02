import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Button, ButtonToolbar } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import EyeIcon from "mdi-react/EyeIcon";
import EmailIcon from "mdi-react/EmailIcon";
import renderDatePickerField from "../../../../shared/components/form/DatePicker";
import CalendarBlankIcon from "mdi-react/CalendarBlankIcon";
import AccountSearchIcon from "mdi-react/AccountSearchIcon";
import renderFileInputField from "../../../../shared/components/form/FileInput";
import renderSelectField from "../../../../shared/components/form/Select";
import renderDropZoneField from "../../../../shared/components/form/DropZone";
import { FaMicrophoneAlt } from "react-icons/fa";
import Collapse from "../../../../shared/components/Collapse";
import renderMultiSelectField from "../../../../shared/components/form/MultiSelect";

const HorizontalForm = ({ handleSubmit, reset }) => {
  const { t } = useTranslation("common");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t("Add New Issue")}</h5>
            <h5 className="subhead">Put values to add new issues</h5>
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
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Issue Title</span>
                <div className="form__form-group-field">
                  <Field
                    name="Issue Title"
                    component="input"
                    type="descrption"
                    placeholder="descrption"
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
                <span className="form__form-group-label">Branch</span>
                <div className="form__form-group-field">
                  <Field
                    name="Branch"
                    component={renderSelectField}
                    options={[
                      { value: "DE Poland", label: "DE Poland" },
                      { value: "DE Italy", label: "DE Italy" },
                      { value: "DE Spain", label: "DE Spain" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
                <span className="form__form-group-label">Client</span>
                <div className="form__form-group-field">
                  <Field
                    name="Client"
                    component={renderSelectField}
                    options={[
                      { value: "Morrison", label: "Morrison" },
                      { value: "Alexander", label: "Alexander" },
                      { value: "Medinberg", label: "Medinberg" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
                <span className="form__form-group-label">Project</span>
                <div className="form__form-group-field">
                  <Field
                    name="Project"
                    component={renderSelectField}
                    options={[
                      { value: "DE Matika Ratingen", label: "DE Matika Ratingen" },
                      { value: "DE Fuji Oil", label: "DE Fuji Oil" },
                      { value: "DE Mizuho Bank", label: "DE Mizuho Bank" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
                <span className="form__form-group-label">Occurance</span>
                <div className="form__form-group-field">
                  <Field
                    name="Occurance"
                    component={renderSelectField}
                    options={[
                      { value: "Before HO", label: "Before HO" },
                      { value: "After HO", label: "After HO" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
                <span className="form__form-group-label">Occurance Date</span>
                <div className="form__form-group-field">
                  <Field
                    name="Occurance"
                    component={renderDatePickerField}
                    type="text"
                    placeholder="yyyy/mm/dd"
                  />
                  <div className="form__form-group-icon">
                    <CalendarBlankIcon />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
                <span className="form__form-group-label">Level</span>
                <div className="form__form-group-field">
                  <Field
                    name="Level"
                    component={renderSelectField}
                    options={[
                      { value: "i", label: "i" },
                      { value: "ii", label: "ii" },
                      { value: "iii", label: "iii" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Disturbance</span>
                <div className="form__form-group-field">
                  <Field
                    name="Disturbance"
                    component={renderSelectField}
                    options={[
                      { value: "Yes", label: "Yes" },
                      { value: "No", label: "No" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Phenomenon</span>
                <div className="form__form-group-field">
                  <Field
                    name="Phenomenon"
                    component={renderSelectField}
                    options={[
                      { value: "Cracks", label: "Cracks" },
                      { value: "Vibbrations", label: "Vibrations" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Position</span>
                <div className="form__form-group-field">
                  <Field
                    name="Position"
                    component={renderSelectField}
                    options={[
                      { value: "Walls", label: "Walls" },
                      { value: "Ceiling", label: "Ceiling" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Status</span>
                <div className="form__form-group-field">
                  <Field
                    name="Status"
                    component={renderSelectField}
                    options={[
                      { value: "Completed", label: "Completed" },
                      { value: "Ongoing", label: "Ongoing" },
                      { value: "Closed", label: "Closed" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
                <span className="form__form-group-label">Resposibility</span>
                <div className="form__form-group-field">
                  <Field
                    name="Resposibility"
                    component={renderSelectField}
                    options={[
                      { value: "TAKENAKA", label: "TAKENAKA" },
                      { value: "Sub-con", label: "Sub-con" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
                <span className="form__form-group-label">Assign</span>
                <div className="form__form-group-field">
                  <Field
                    name="Assign"
                    component={renderSelectField}
                    options={[
                      { value: "Morrison", label: "Morrison" },
                      { value: "Alexander", label: "Alexander" },
                      { value: "Medinberg", label: "Medinberg" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Cc</span>
                <div className="form__form-group-field">
                  <Field
                    name="Cc"
                    component={renderSelectField}
                    options={[
                      { value: "Morrison", label: "Morrison" },
                      { value: "Alexander", label: "Alexander" },
                      { value: "Medinberg", label: "Medinberg" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">WBS</span>
                <div className="form__form-group-field">
                  <Field
                    name="WBS"
                    component={renderSelectField}
                    options={[
                      { value: "000 - Site Installation", label: "000 - Site Installation" },
                      { value: "001 - Site Consumable", label: "001 - Site Consumable" },
                      { value: "	002 - infrastructure connection cost and fee", label: "	002 - infrastructure connection cost and fee" },
                    ]}
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <div className="form__form-group">
                <span className="form__form-group-label">Description</span>
                <div className="form__form-group-field">
                  <Field
                    name="description"
                    component="input"
                    type="descrption"
                    placeholder="descrption"
                  />
                </div>
              </div>
            </Col>
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
            {/* <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Add Issue</Button>
              <Button type="button" onClick={reset}>
                Cancel
              </Button>
            </ButtonToolbar> */}
            {/* </form> */}
            <Col sm={12} md={12} lg={12}>
              <div className="card__title">
                <h5 className="bold-text">{t("Add attachments")}</h5>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Field
                name="files"
                component={renderDropZoneField}
                customHeight
              />
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">
                  Submit
                </Button>
                <Button type="button" onClick={reset}>
                  Cancel
                </Button>
              </ButtonToolbar>
              {/* </form> */}
            </Col>
            <Col sm={12} md={6} lg={6}>
              <button
                id="dropContainer1"
                style={{ height: "298px", width: "100%" }}
              >
                <div>
                  <h3>Click to download voice notes</h3>
                </div>
                <div>
                  <FaMicrophoneAlt size={100} />
                </div>
              </button>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="btn-clm">
                <Button  type="button">
                  <Link to="/forms/qpis_form">
                    <p className="butn__link-title">QPIS Form</p>
                  </Link>
                </Button>
              </div>
            </Col>
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
  form: "horizontal_form", // a unique identifier for this form
})(HorizontalForm);
