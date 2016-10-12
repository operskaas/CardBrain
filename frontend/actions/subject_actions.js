export const GET_SUBJECT = 'GET_SUBJECT';
export const RECEIVE_SUBJECT = 'RECEIVE_SUBJECT';

export const getSubject = subjectId => ({
  type: GET_SUBJECT,
  subjectId
});

export const receiveSubject = data => ({
  type: RECEIVE_SUBJECT,
  data
});
