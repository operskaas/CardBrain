export const fetchCurrentUserSubjectFollows = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/subject_follows',
    dataType: 'json',
    success,
    error
  })
};
