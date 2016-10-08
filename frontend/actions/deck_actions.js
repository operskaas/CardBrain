export const GET_DECKS = 'GET_DECKS';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export const getDecks = (subjectId) => ({
  type: GET_DECKS,
  subjectId
});

export const receiveDecks = (data) => ({
  type: RECEIVE_DECKS,
  data
})
