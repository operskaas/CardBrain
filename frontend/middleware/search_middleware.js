import { SEND_SEARCH_QUERY, receiveSearchResults } from '../actions/search_actions';
import { postSearchQuery } from '../util/search_api_util';

const SearchMiddleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case SEND_SEARCH_QUERY:
      let success = data => dispatch(receiveSearchResults(data));
      let error = () => {};
      postSearchQuery(action.query, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
