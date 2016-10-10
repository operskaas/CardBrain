import { RECEIVE_CARDS, RESET_CARD_SAVE } from '../actions/card_actions';
import merge from 'lodash/merge';

const _defaultCardSlice = {
  deck: {},
  cards: {},
  cardSave: false
}

const CardReducer = (prevState = _defaultCardSlice, action) => {
  switch (action.type) {
    case RECEIVE_CARDS:
      let newState =  merge({}, prevState);
      return merge(newState, action.data);
    case RESET_CARD_SAVE:
      newState = merge({}, prevState);
      newState.cardSave = false;
      return newState;
    default:
      return prevState;
  }
}

export default CardReducer
