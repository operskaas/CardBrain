import { RECEIVE_CARDS, RESET_CARD_SAVE, RECEIVE_CARD } from '../actions/card_actions';
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
      newState = merge(newState, action.data);
      newState.cards = action.data.cards;
      newState.cardSave = action.data.cardSave;
      return newState;
    case RECEIVE_CARD:
      newState = merge({}, prevState);
      let cardId = Object.keys(action.data)[0];
      newState.cards[cardId] = action.data[cardId];
      return newState;
    case RESET_CARD_SAVE:
      newState = merge({}, prevState);
      newState.cardSave = false;
      return newState;
    default:
      return prevState;
  }
}

export default CardReducer
