import { GET_SUBJECT, receiveSubject } from '../actions/subject_actions';
import { fetchSubject } from '../util/subject_api_util';

const SubjectMiddleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case GET_SUBJECT:
      let success = data => dispatch(receiveSubject(data));
      let error = () => {};
      fetchSubject(action.subjectId, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default SubjectMiddleware;
