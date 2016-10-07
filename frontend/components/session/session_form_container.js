import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/error_actions';
import SessionForm from './session_form';
import { withRouter, hashHistory } from 'react-router'

// const formType = url => {
//   if (url === '/modal/login') {
//     return 'login';
//   } else if (url === '/modal/signup') {
//     return 'signup';
//   }
// };

const processForm = (ownProps, dispatch) => {
  const cb = () => {
    ownProps.closeModal();
    hashHistory.push('/library');
  }
  if (ownProps.formType === 'signup') {
    return (user) => dispatch(signup(user, cb));
  } else if (ownProps.formType === 'login') {
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
