export const postSearchQuery = (query, success, error) => {
  $.ajax({
    type:'GET',
    url:`/api/searches/?query=${query}`,
    dataType: 'json',
    success,
    error
  });
};
