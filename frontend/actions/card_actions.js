export const GET_CARDS = 'GET_CARDS';
export const RECEIVE_CARDS = 'RECEIVE_CARDS';

export const getCards = deckId => ({
  type: GET_CARDS,
  deckId
});

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});
