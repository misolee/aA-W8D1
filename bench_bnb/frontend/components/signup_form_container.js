import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_actions';

const mstp = (state) => {
  return ({
    formType: 'signup',
    errors: state.errors.session
  });
};

const mdtp = (dispatch) => {
  return ({
    processForm: user => dispatch(signup(user))
  });
};

export default connect(mstp, mdtp)(SessionForm);