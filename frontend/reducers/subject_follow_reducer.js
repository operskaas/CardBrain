import {
  RECEIVE_SUBJECT_FOLLOWS,
  SET_ACTIVE_SUBJECT_FOLLOW,
  RECEIVE_SUBJECT_FOLLOW
} from '../actions/subject_follow_actions';

import merge from 'lodash/merge';

const _defaultSubjectFollowsSlice = {
  active: null,
  current: {}
};

const SubjectFollowReducer = (prevState = _defaultSubjectFollowsSlice, action) => {
  switch (action.type) {
    case RECEIVE_SUBJECT_FOLLOWS:
      return action.subjectFollows;
    case SET_ACTIVE_SUBJECT_FOLLOW:
      let newState = merge({}, prevState);
      newState.active = action.subjectId;
      return newState;
    case RECEIVE_SUBJECT_FOLLOW:
      newState = merge({}, prevState);
      newState.active = action.data.subjectFollow.id;
      return newState;
    default:
      return prevState;
  }
};

export default SubjectFollowReducer;
