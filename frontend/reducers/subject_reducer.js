import { RECEIVE_SUBJECT } from '../actions/subject_actions';

const _defaultSubjectSlice = {
  title: '',
  id: 0,
  author: '',
  userIsFollowing: false,
  decks: []
};

const SubjectReducer = (prevState = _defaultSubjectSlice, action) => {
  switch (action.type) {
    case RECEIVE_SUBJECT:
      return action.data;
    default:
      return prevState;
  }
};

export default SubjectReducer;
