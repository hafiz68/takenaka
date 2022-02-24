import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Button, Card, CardBody, Col, Table, Row } from 'reactstrap';
import Collapse from '../../../../shared/components/Collapse';
import { AiOutlinePlusCircle } from 'react-icons/ai'

const BoxedCollapseFullWidth = ({
  onClick, changeToLight, changeToDark,
}) => {
  // const hideSidebar = () => {
  //   onClick();
  // };
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            {/* <h5 className="bold-text">{t('Configurator')}</h5> */}
            {/* <h5 className="subhead">Use default collapse with class <span className="red-text">with-shadow</span></h5> */}
          </div>
          <Collapse title="Themes" className="with-shadow">
            <div className='btn-clm'>
              <button className="butn__link" type="button" onClick={changeToLight}>
                <p className="butn__link-title">Light Theme</p>
              </button>
              <button className="butn__link" type="button" onClick={changeToDark}>
                <p className="butn__link-title">Dark Theme</p>
              </button></div>
          </Collapse>
          <Collapse title="User Mapping" className="with-shadow">
            <p><Collapse title="Users by Usernames" className="with-shadow">
              <p>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>User Name</th>
                      <th>Checkbox</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr >
                      <td>1</td>
                      <td>John23</td>
                      <td><input type='radio'></input></td>
                    </tr>
                    <tr >
                      <td>1</td>
                      <td>John23</td>
                      <td><input type='radio'></input></td>
                    </tr>
                    <tr >
                      <td>1</td>
                      <td>John23</td>
                      <td><input type='radio'></input></td>
                    </tr>
                    <tr >
                      <td>1</td>
                      <td>John23</td>
                      <td><input type='radio'></input></td>
                    </tr>
                    <tr >
                      <td>1</td>
                      <td>John23</td>
                      <td><input type='radio'></input></td>
                    </tr>

                  </tbody>
                </Table>
              </p>
            </Collapse><Collapse title="Users by Ids" className="with-shadow">
                <p><Table responsive hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>User Name</th>
                      <th>Checkbox</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr >
                      <td>1</td>
                      <td>John23</td>
                      <td><input type='radio'></input></td>
                    </tr>
                    <tr >
                      <td>1</td>
                      <td>John23</td>
                      <td><input type='radio'></input></td>
                    </tr>
                    <tr >
                      <td>1</td>
                      <td>John23</td>
                      <td><input type='radio'></input></td>
                    </tr>
                    <tr >
                      <td>1</td>
                      <td>John23</td>
                      <td><input type='radio'></input></td>
                    </tr>
                    <tr >
                      <td>1</td>
                      <td>John23</td>
                      <td><input type='radio'></input></td>
                    </tr>

                  </tbody>
                </Table>
                </p>
              </Collapse>
            </p>
          </Collapse>
          <Collapse title="Default Data" className="with-shadow">
            <Row>
              <Col xs={12} md={6} lg={6}>

                <p><Table responsive hover>
                  <thead>
                    <tr>
                      <th>Penomenon</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr >
                      <td>Rain leakage</td>
                    </tr>
                    <tr >
                      <td>Leakage</td>
                    </tr>
                    <tr >
                      <td>Cracks</td>
                    </tr>
                    <tr >
                      <td>Fall</td>
                    </tr>
                    <tr >
                      <td>MalFunction</td>
                    </tr>
                    <tr >
                      <td><AiOutlinePlusCircle size={25} /> Tab to enter new item</td>
                    </tr>

                  </tbody>
                </Table>
                </p>
              </Col>
              <Col xs={12} md={4} lg={4}>

                <p><Table responsive hover>
                  <thead>
                    <tr>
                      <th>Position</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr >
                      <td>roof</td>
                    </tr>
                    <tr >
                      <td>Wall</td>
                    </tr>
                    <tr >
                      <td>Ceiling</td>
                    </tr>
                    <tr >
                      <td>exterior</td>
                    </tr>
                    <tr >
                      <td>Plumbing</td>
                    </tr>
                    <tr >
                      <td><AiOutlinePlusCircle size={25} /> Tab to enter new item</td>
                    </tr>

                  </tbody>
                </Table>
                </p>
              </Col>
            </Row>
          </Collapse>
          {/* <Collapse title="Voice notes" className="with-shadow">
            <div className='btn-clm'>
              <button className="butn__link" type="button" onClick={changeToLight}>
                <p className="butn__link-title">English</p>
              </button>
              <button className="butn__link" type="button" onClick={changeToDark}>
                <p className="butn__link-title">Japanese</p>
              </button>
              <button className="butn__link" type="button" onClick={changeToDark}>
                <p className="butn__link-title">German</p>
              </button></div>
          </Collapse> */}
        </CardBody>
      </Card>
    </Col>
  );

};
BoxedCollapseFullWidth.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};
export default BoxedCollapseFullWidth;
