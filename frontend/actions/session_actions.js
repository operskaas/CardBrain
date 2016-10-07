export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user, cb) => ({
  type: LOGIN,
  user,
  cb
});

export const logout = (cb) => ({
  type: LOGOUT,
  cb
});

export const signup = (user, cb) => ({
  type: SIGNUP,
  user,
  cb
});

export const receiveCurrentUser = (data) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: data.currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
