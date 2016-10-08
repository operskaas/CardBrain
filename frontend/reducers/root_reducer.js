import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubjectFollowReducer from './subject_follow_reducer';
import DeckReducer from './deck_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  subjectFollows: SubjectFollowReducer,
  decks: DeckReducer
});

export default RootReducer;
