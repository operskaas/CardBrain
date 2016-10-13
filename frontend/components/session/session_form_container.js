import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/error_actions';
import SessionForm from './session_form';
import { withRouter, hashHistory } from 'react-router'

const processForm = (ownProps, dispatch) => {
  if (ownProps.formType === 'signup') {
    const cb = () => {
      ownProps.closeModal();
      hashHistory.push('/search');
    }
    return (user) => dispatch(signup(user, cb));
  } else if (ownProps.formType === 'login') {
    const cb = () => {
      ownProps.closeModal();
      hashHistory.push('/library');
    }
    return (user) => dispatch(login(user, cb));
  }
};


const mapStateToProps = state => ({
  loggedIn: !(state.session.currentUser.id === null),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (user) => {
      processForm(ownProps, dispatch)(user);
    },
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SessionForm));
