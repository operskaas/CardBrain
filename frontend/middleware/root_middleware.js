import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SubjectFollowMiddleware from './subject_follow_middleware';
import DeckMiddleware from './deck_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SubjectFollowMiddleware,
  DeckMiddleware,
  CardMiddleware
);

export default RootMiddleware;
