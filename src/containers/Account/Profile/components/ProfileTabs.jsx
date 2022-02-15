import React, { useState } from 'react';
import {
  Card, Col, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import ProfileTimeLine from './ProfileTimeLine';
import ProfileActivities from './ProfileActivities';
import showResults from './Show';
import ProfileSettings from './ProfileSettings';
import UpdatePass from './UpdatePass';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('1');
  const initialValues = {
    username: 'Larry Boom',
    email: 'boom@mail.com',
  };

  const handleToggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <div className="profile__card tabs tabs--bordered-bottom">
          <div className="tabs__wrap">
            <Nav tabs>
              {/* <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => handleToggle('1')}
                >
                  Activity
                </NavLink>
              </NavItem> */}
            
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => handleToggle('1')}
                >
                  Settings
                </NavLink>
              </NavItem>
                <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => handleToggle('2')}
                >
                  Update Password
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              {/* <TabPane tabId="1">
                <ProfileActivities />
              </TabPane> */}
              <TabPane tabId="2">
              <UpdatePass onSubmit={showResults} initialValues={initialValues} />
              </TabPane>
              <TabPane tabId="1">
                <ProfileSettings onSubmit={showResults} initialValues={initialValues} />
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProfileTabs;
