import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SubjectFollowReducer from './subject_follow_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  subjectFollows: SubjectFollowReducer
});

export default RootReducer;
