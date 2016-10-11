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

export const postConfidenceRating = (cardId, rating, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/confidence_ratings',
    dataType: 'json',
    data: {confidence_rating: {rating, card_id: cardId} },
    success,
    error
  });
};
