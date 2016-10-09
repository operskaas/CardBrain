export const fetchCards = (deckId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/cards/?deckId=${deckId}`,
    dataType: 'json',
    success,
    error
  });
};
