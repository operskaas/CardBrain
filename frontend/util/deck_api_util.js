export const fetchDecks = (subjectId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/decks/?subjectId=${subjectId}`,
    dataType: 'json',
    success,
    error
  });
};
