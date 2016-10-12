import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SubjectFollowMiddleware from './subject_follow_middleware';
import DeckMiddleware from './deck_middleware';
import CardMiddleware from './card_middleware';
import SearchMiddleware from './search_middleware';
import SubjectMiddleware from './subject_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SubjectFollowMiddleware,
  DeckMiddleware,
  CardMiddleware,
  SearchMiddleware,
  SubjectMiddleware
);

export default RootMiddleware;
