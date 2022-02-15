import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BasicForm from '../../../Form/BasicForm/index';
import BasicFormIssue from '../../../Form/BasicFormIssues/index';
import BasicForm_Issue from '../../../Form/BasicForm_issues/index';
import Simple_form from '../../../Form/BasicForm_simple/index';
import QpisForm from '../../../Form/BasicForm_qpis/index';
import CheckFormControls from '../../../Form/CheckFormControls/index';
import FileUpload from '../../../Form/FileUpload/index';
import FloatingLabelsForm from '../../../Form/FloatingLabelsForm/index';
import FormDropzone from '../../../Form/FormDropzone/index';
import FormLayouts from '../../../Form/FormLayouts/index';
import FormPicker from '../../../Form/FormPicker/index';
import FormValidation from '../../../Form/FormValidation/index';
import MaskForm from '../../../Form/MaskForm/index';
import MaterialForm from '../../../Form/MaterialForm/index';
import WizardForm from '../../../Form/WizardForm/index';

export default () => (
  <Switch>
    <Route path="/forms/basic_form" component={BasicFormIssue} />
    <Route path="/forms/basic_form_Issue" component={BasicForm} />
    <Route path="/forms/basic_formissue" component={BasicForm_Issue} />
    <Route path="/forms/simple_form" component={Simple_form} />
    <Route path="/forms/qpis_form" component={QpisForm} />
    <Route path="/forms/check_form_controls" component={CheckFormControls} />
    <Route path="/forms/file_upload" component={FileUpload} />
    <Route path="/forms/floating_labels_form" component={FloatingLabelsForm} />
    <Route path="/forms/form_dropzone" component={FormDropzone} />
    <Route path="/forms/form_layouts" component={FormLayouts} />
    <Route path="/forms/form_picker" component={FormPicker} />
    <Route path="/forms/form_validation" component={FormValidation} />
    <Route path="/forms/mask_form" component={MaskForm} />
    <Route path="/forms/material_form" component={MaterialForm} />
    <Route path="/forms/wizard_form" component={WizardForm} />
    
  </Switch>
);
