import { RECEIVE_DECKS } from '../actions/deck_actions';

const _defaultDeckSlice = {};

const DeckReducer = (prevState = _defaultDeckSlice, action) => {
  switch(action.type){
    case RECEIVE_DECKS:
      debugger;
      return action.data;
    default:
      return prevState
  }
}

export default DeckReducer;
