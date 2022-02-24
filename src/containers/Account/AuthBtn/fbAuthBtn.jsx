import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookIcon from 'mdi-react/FacebookIcon';
import { auth, authError } from '../../../redux/actions/authActions';
import facebookAuthSettings from '../../../config/facebook';

const AuthFacebookeBtn = ({ dispatch, history }) => {
  const responseSuccess = (response) => {
    if (response.status) {
      dispatch(authError('Some error'));
    } else {
      dispatch(auth({ name: response.name, avatar: response.picture.data.url }));
      localStorage.setItem('easydev', response.accessToken);
      history.push('/main_dashboard');
    }
  };

  return (
    <FacebookLogin
      appId={facebookAuthSettings.appId}
      fields="name,email,picture"
      render={renderProps => (
        <button
          type="button"
          className="account__social-btn account__social-btn--facebook"
          onClick={renderProps.onClick}
        >
          <FacebookIcon />
        </button>
      )}
      callback={responseSuccess}
    />
  );
};

AuthFacebookeBtn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(connect()(AuthFacebookeBtn));
