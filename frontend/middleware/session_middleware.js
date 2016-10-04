import * as Actions from '../actions/session_actions';
import * as SessionApi from '../util/session_api_util';

const SessionMiddleware = ({ dispatch }) => next => action => {
  let success = (data) => {
    dispatch(Actions.receiveCurrentUser(data));
  };
  let error = (data) => {
    dispatch(Actions.receiveErrors(data.responseJSON.errors));
  }
  switch (action.type) {
    case Actions.LOGIN:
      SessionApi.login(action.user.username, action.user.password, success, error);
      return next(action);
    case Actions.SIGN_UP:
      SessionApi.signup(action.user.username, action.user.password, success, error);
      return next(action);
    case Actions.LOGOUT:
      let cb = () => next(action);
      SessionApi.logout(cb);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
