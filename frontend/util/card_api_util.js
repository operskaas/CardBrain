export const fetchCards = (deckId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/cards/?deckId=${deckId}`,
    dataType: 'json',
    success,
    error
  });
};

export const postCards = (cards, deckId, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/cards/?deckId=${deckId}`,
    dataType: 'json',
    data: {cards},
    success,
    error
  });
};
