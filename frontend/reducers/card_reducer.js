import { RECEIVE_CARDS } from '../actions/card_actions';

const _defaultCardSlice = {}

const CardReducer = (prevState = _defaultCardSlice, action) => {
  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    default:
      return prevState;
  }
}

export default CardReducer
