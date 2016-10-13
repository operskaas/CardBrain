import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubjectFollowReducer from './subject_follow_reducer';
import DeckReducer from './deck_reducer';
import CardReducer from './card_reducer';
import SearchReducer from './search_reducer';
import SubjectReducer from './subject_reducer';
import FetchingReducer from './fetching_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  subjectFollows: SubjectFollowReducer,
  decks: DeckReducer,
  cards: CardReducer,
  searchResults: SearchReducer,
  subject: SubjectReducer,
  isFetching: FetchingReducer
});

export default RootReducer;
