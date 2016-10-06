import {
  GET_CURRENT_USER_SUBJECT_FOLLOWS,
  receiveSubjectFollows,
  setActiveSubjectFollow,
  CREATE_SUBJECT
} from '../actions/subject_follow_actions';
import {
  fetchCurrentUserSubjectFollows ,
  postSubject
} from '../util/subject_follow_api_util';

const SubjectFollowMiddleware = ({ dispatch }) => next => action => {
  let error = (data) => console.log(data);
  let success = (data) => dispatch(receiveSubjectFollows(data));
  switch (action.type) {
    case GET_CURRENT_USER_SUBJECT_FOLLOWS:
      fetchCurrentUserSubjectFollows(success, error);
      return next(action);
    case CREATE_SUBJECT:
      success = (data) => {
        console.log(data);
        // const fetchSuccess = () => {
        //   dispatch(setActiveSubjectFollow(data.id));
        // }
        // dispatch();
      }
    // success = () => fetchCurrentuserSubjectFollows(success, error);
      postSubject(success, error, action.subject);
      return next(action);
    default:
      return next(action);
  }
};

export default SubjectFollowMiddleware;
