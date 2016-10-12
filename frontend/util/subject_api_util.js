export const fetchSubject = (subjectId, success, error) => {
  $.ajax({
    type: 'get',
    dataType: 'json',
    url: `api/subjects/${subjectId}`,
    success,
    error
  });
};
