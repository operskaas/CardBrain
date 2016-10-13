import { GET_DECKS, CREATE_DECK, DELETE_DECK, RECEIVE_DECKS } from '../actions/deck_actions';
import { SET_ACTIVE_SUBJECT_FOLLOW } from '../actions/subject_follow_actions';

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
