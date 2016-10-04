import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  loggedIn: !(state.session.currentUser.id === null),
  errors: state.session.errors
});

const formType = url => {
  if (url === '/modal/login') {
    return 'login';
  } else if (url === '/modal/signup') {
    return 'signup';
  }
};

const processForm = (formType, dispatch) => {
  if (formType === 'signup') {
    return (user) => dispatch(signup(user));
  } else if (formType === 'login') {
    return (user) => dispatch(login(user));
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  formType: formType(ownProps.location.pathname),
  processForm: processForm(formType(ownProps.location.pathname), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
