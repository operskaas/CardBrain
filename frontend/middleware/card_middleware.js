import {
  GET_CARDS,
  receiveCards,
  CREATE_CARDS,
  CREATE_CONFIDENCE_RATING
} from '../actions/card_actions';

import {
  fetchCards,
  postCards,
  postConfidenceRating
} from '../util/card_api_util';

const CardMiddleware = ({ dispatch }) => next => action => {
  let error = (data) => console.log(data);
  let success = (data) => {
    dispatch(receiveCards(data));
  };
  switch (action.type) {
    case GET_CARDS:
      fetchCards(action.deckId, success, error);
      return next(action);
    case CREATE_CARDS:
      postCards(action.cards, action.deckId, success, error);
      return next(action);
    case CREATE_CONFIDENCE_RATING:
      success = (data) => dispatch(receiveCard(data))
      postConfidenceRating(action.cardId, action.rating, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default CardMiddleware;
