import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SubjectFollowMiddleware from './subject_follow_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SubjectFollowMiddleware
);

export default RootMiddleware;
