import * as Actions from '../actions/session_actions';

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
    default:
      return prevState;
  }
};

export default SessionReducer;
