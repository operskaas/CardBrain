import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const _defaultSearchSlice = [];

const SearchReducer = (prevState = _defaultSearchSlice, action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.data;
    default:
      return prevState;
  }
};

export default SearchReducer
