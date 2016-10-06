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
