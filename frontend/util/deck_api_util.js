export const fetchDecks = (subjectId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/decks/?subjectId=${subjectId}`,
    dataType: 'json',
    success,
    error
  });
};

export const postDeck = (deck, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/decks',
    dataType: 'json',
    data: {deck},
    success,
    error
  });
};

export const destroyDeck = (deckId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/decks/${deckId}`,
    dataType: 'json',
    success,
    error
  });
};
