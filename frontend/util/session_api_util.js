export const signup = (user, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/users',
    dataType: 'json',
    data: {user},
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/session',
    dataType: 'json',
    data: {user},
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
