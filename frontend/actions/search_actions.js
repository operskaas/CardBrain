export const SEND_SEARCH_QUERY = 'SEND_SEARCH_QUERY';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const sendSearchQuery = query => ({
  type: SEND_SEARCH_QUERY,
  query
});

export const receiveSearchResults = data => {
  return ({
  type: RECEIVE_SEARCH_RESULTS,
  data
  });
};

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});
