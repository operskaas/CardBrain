import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  receiveCurrentUser,
  receiveErrors
} from '../actions/session_actions';
import * as SessionApi from '../util/session_api_util';

const SessionMiddleware = ({ dispatch }) => next => action => {
  let success = (data) => {
    dispatch(receiveCurrentUser(data));
    action.cb();
  };
  let error = (data) => dispatch(receiveErrors(data.responseJSON.errors));
  switch (action.type) {
    case LOGIN:
      SessionApi.login(action.user, success, error);
      return next(action);
    case SIGNUP:
      SessionApi.signup(action.user, success, error);
      return next(action);
    case LOGOUT:
      let cb = () => {
        next(action);
        action.cb();
      }
      SessionApi.logout(cb);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
