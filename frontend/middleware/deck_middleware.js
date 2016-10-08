import { GET_DECKS, receiveDecks } from '../actions/deck_actions';
import { fetchDecks } from '../util/deck_api_util';

const DeckMiddleware = ({ dispatch }) => next => action => {
  let error = (data) => console.log(data);
  let success = (data) => {
    dispatch(receiveDecks(data));
  };
  switch (action.type) {
    case GET_DECKS:
      fetchDecks(action.subjectId, success, error);
      return next(action);
    default:
      return next(action);
  }
}

export default DeckMiddleware;
