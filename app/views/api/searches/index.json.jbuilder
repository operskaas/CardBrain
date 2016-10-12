json.array! do
  @results.each do |result|
    json.title result.title
  end
end
