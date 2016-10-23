import { GET_DECKS, RECEIVE_DECKS } from '../actions/deck_actions';

const _defaultFetchingSlice = false;

const FetchingReducer = (prevState = _defaultFetchingSlice, action) => {
  switch (action.type) {
    case GET_DECKS:
      return true;
    case RECEIVE_DECKS:
      return false;
    default:
      return prevState;
  }
};

export default FetchingReducer;
