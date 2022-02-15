import React from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import Summary from './components/Summary';
import ProjectTeam from './components/ProjectTeam';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

const ProjectSummary = ({ rtl }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Takenaka Summary</h3>
        <h3 className="page-subhead subhead">Here is your whole Summary Which you can check
        </h3>
      </Col>
    </Row>
    <Row>
      <Summary dir={rtl.direction} />
      {/* <ProjectTeam /> */}
    </Row>
  </Container>
);

ProjectSummary.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(ProjectSummary);
