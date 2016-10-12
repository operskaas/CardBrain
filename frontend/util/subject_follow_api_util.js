export const fetchCurrentUserSubjectFollows = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/subject_follows',
    dataType: 'json',
    success,
    error
  });
};

export const postSubject = (success, error, subject) => {
  $.ajax({
    method: 'POST',
    url: 'api/subjects',
    dataType: 'json',
    data: {subject},
    success,
    error
  });
};

export const patchSubject = (success, error, subject, subjectId) => {
  $.ajax({
    method: 'PATCH',
    url: `api/subjects/${subjectId}`,
    dataType: 'json',
    data: {subject},
    success,
    error
  });
};

export const destroySubject = (success, error, subjectId) => {
  $.ajax({
    method: 'DELETE',
    url: `api/subjects/${subjectId}`,
    dataType: 'json',
    success,
    error
  });
};

export const postSubjectFollow = (success, error, userId, subjectId) => {
  $.ajax({
    method: 'POST',
    url: 'api/subject_follows',
    dataType: 'json',
    data: {userId, subjectId},
    success,
    error
  });
};
