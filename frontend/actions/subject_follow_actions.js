export const GET_CURRENT_USER_SUBJECT_FOLLOWS = 'GET_CURRENT_USER_SUBJECT_FOLLOWS';
export const  RECEIVE_SUBJECT_FOLLOWS = 'RECEIVE_SUBJECT_FOLLOWS';
export const SET_ACTIVE_SUBJECT_FOLLOW = 'SET_ACTIVE_SUBJECT_FOLLOW';
export const CREATE_SUBJECT = 'CREATE_SUBJECT';
export const UPDATE_SUBJECT = 'UPDATE_SUBJECT';
export const DELETE_SUBJECT = 'DELETE_SUBJECT';
export const CREATE_SUBJECT_FOLLOW = 'CREATE_SUBJECT_FOLLOW';
export const RECEIVE_SUBJECT_FOLLOW = 'RECEIVE_SUBJECT_FOLLOW';

export const getCurrentUserSubjectFollows = () => ({
  type: GET_CURRENT_USER_SUBJECT_FOLLOWS
});

export const receiveSubjectFollows = subjectFollows => ({
  type: RECEIVE_SUBJECT_FOLLOWS,
  subjectFollows
});

export const setActiveSubjectFollow = (subjectId) => ({
  type: SET_ACTIVE_SUBJECT_FOLLOW,
  subjectId
});

export const createSubject = (subject) => ({
  type: CREATE_SUBJECT,
  subject
});

export const updateSubject = (subject, subjectId) => ({
  type: UPDATE_SUBJECT,
  subject,
  subjectId
});

export const deleteSubject = subjectId => ({
  type: DELETE_SUBJECT,
  subjectId
});

export const createSubjectFollow = (userId, subjectId) => ({
  type: CREATE_SUBJECT_FOLLOW,
  userId,
  subjectId
});

export const receiveSubjectFollow = data => ({
  type: RECEIVE_SUBJECT_FOLLOW,
  data
});
