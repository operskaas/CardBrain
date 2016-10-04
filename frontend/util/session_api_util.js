export const signup = (username, password, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/users',
    dataType: 'json',
    data: {user: {username, password}},
    success,
    error
  });
};

export const login = (username, password, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/session',
    dataType: 'json',
    data: {user: {username, password}},
    success,
    error
  });
};

export const logout = (cb) => {
  $.ajax({
    method: 'delete',
    url: 'api/session',
    dataType: 'json',
    success: cb,
    error: cb
  });
};
