import { GET_CURRENT_USER_SUBJECT_FOLLOWS, receiveSubjectFollows } from '../actions/subject_follow_actions';
import { fetchCurrentUserSubjectFollows } from '../util/subject_follow_api_util';

const SubjectFollowMiddleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case GET_CURRENT_USER_SUBJECT_FOLLOWS:
      let success = (data) => dispatch(receiveSubjectFollows(data));
      let error = (data) => console.log(data);
      fetchCurrentUserSubjectFollows(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default SubjectFollowMiddleware;
