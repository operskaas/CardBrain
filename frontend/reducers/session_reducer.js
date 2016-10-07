import * as Actions from '../actions/session_actions';
import { CLEAR_SESSION_ERRORS } from '../actions/error_actions';
import merge from 'lodash/merge';

const _defaultSessionSlice = {
  currentUser: {
    id: null,
    username: null
  },
  errors: []
};

const SessionReducer = (prevState = _defaultSessionSlice, action) => {
  switch (action.type) {
    case Actions.RECEIVE_CURRENT_USER:
      debugger
      return {currentUser: action.currentUser, errors: []};
    case Actions.RECEIVE_ERRORS:
      return {
        currentUser: {
          id: null,
          username: null
        },
        errors: action.errors
      };
    case Actions.LOGOUT:
      return _defaultSessionSlice;
    case CLEAR_SESSION_ERRORS:
      let nextState = merge({}, prevState);
      nextState.errors= [];
      return nextState;
    default:
      return prevState;
  }
};

export default SessionReducer;
