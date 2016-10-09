import { GET_CARDS, receiveCards, CREATE_CARDS } from '../actions/card_actions';
import { fetchCards, postCards } from '../util/card_api_util';

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
    default:
      return next(action);
  }
};

export default CardMiddleware;
