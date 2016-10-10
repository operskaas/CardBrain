export const GET_CARDS = 'GET_CARDS';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const CREATE_CARDS = 'CREATE_CARDS';
export const RESET_CARD_SAVE = 'RESET_CARD_SAVE';
export const CREATE_CONFIDENCE_RATING = 'CREATE_CONFIDENCE_RATING';

export const getCards = deckId => ({
  type: GET_CARDS,
  deckId
});

export const receiveCards = data => ({
  type: RECEIVE_CARDS,
  data
});

export const createCards = (cards, deckId) => ({
  type: CREATE_CARDS,
  cards,
  deckId
});

export const resetCardSave = () => ({
  type: RESET_CARD_SAVE
});

export const createConfidenceRating = (cardId, rating) => ({
  type: CREATE_CONFIDENCE_RATING,
  cardId,
  rating
});
