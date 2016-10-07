import {
  GET_CURRENT_USER_SUBJECT_FOLLOWS,
  receiveSubjectFollows,
  setActiveSubjectFollow,
  CREATE_SUBJECT,
  UPDATE_SUBJECT,
  DELETE_SUBJECT
} from '../actions/subject_follow_actions';
import {
  fetchCurrentUserSubjectFollows ,
  postSubject,
  patchSubject,
  destroySubject
} from '../util/subject_follow_api_util';

const SubjectFollowMiddleware = ({ dispatch }) => next => action => {
  let error = (data) => console.log(data);
  let success = (data) => {
    dispatch(receiveSubjectFollows(data));
  };
  switch (action.type) {
    case GET_CURRENT_USER_SUBJECT_FOLLOWS:
      fetchCurrentUserSubjectFollows(success, error);
      return next(action);
    case CREATE_SUBJECT:
      postSubject(success, error, action.subject);
      return next(action);
    case UPDATE_SUBJECT:
      patchSubject(success, error, action.subject, action.subjectId);
      return next(action);
    case DELETE_SUBJECT:
      destroySubject(success, error, action.subjectId);
      return next(action);
    default:
      return next(action);
  }
};

export default SubjectFollowMiddleware;
