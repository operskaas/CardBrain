import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';

const _defaultSearchSlice = [];

const SearchReducer = (prevState = _defaultSearchSlice, action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.data;
    case CLEAR_SEARCH_RESULTS:
      return _defaultSearchSlice;
    default:
      return prevState;
  }
};

export default SearchReducer
