export const GET_CURRENT_USER_SUBJECT_FOLLOWS = 'GET_CURRENT_USER_SUBJECT_FOLLOWS';
export const  RECEIVE_SUBJECT_FOLLOWS = 'RECEIVE_SUBJECT_FOLLOWS';

export const getCurrentUserSubjectFollows = () => ({
  type: GET_CURRENT_USER_SUBJECT_FOLLOWS
});

export const receiveSubjectFollows = subjectFollows => ({
  type: RECEIVE_SUBJECT_FOLLOWS,
  subjectFollows
});
