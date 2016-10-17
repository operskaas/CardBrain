import {
  GET_DECKS,
  receiveDecks,
  CREATE_DECK,
  DELETE_DECK,
} from '../actions/deck_actions';
import { fetchDecks, postDeck, destroyDeck } from '../util/deck_api_util';

const DeckMiddleware = ({ dispatch }) => next => action => {
  let error = () => {};
  let success = (data) => {
    dispatch(receiveDecks(data));
  };
  switch (action.type) {
    case GET_DECKS:
      fetchDecks(action.subjectId, success, error);
      return next(action);
    case CREATE_DECK:
      postDeck(action.deck, success, error);
      return next(action);
    case DELETE_DECK:
      destroyDeck(action.deckId, success, error);
      return next(action);
    default:
      return next(action);
  }
}

export default DeckMiddleware;
