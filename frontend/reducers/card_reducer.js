import { RECEIVE_CARDS } from '../actions/card_actions';

const _defaultCardSlice = {
  deck: {},
  cards: {}
}

const CardReducer = (prevState = _defaultCardSlice, action) => {
  switch (action.type) {
    case RECEIVE_CARDS:
      return action.data;
    default:
      return prevState;
  }
}

export default CardReducer
