import { RECEIVE_SUBJECT_FOLLOWS } from '../actions/subject_follow_actions';

const _defaultSubjectFollowsSlice = [];

const SubjectFollowReducer = (prevState = _defaultSubjectFollowsSlice, action) => {
  switch (action.type) {
    case RECEIVE_SUBJECT_FOLLOWS:
      return action.subjectFollows;
    default:
      return prevState;
  }
};

export default SubjectFollowReducer;
