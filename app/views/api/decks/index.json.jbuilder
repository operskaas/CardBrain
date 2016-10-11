@decks.each do |deck|
  json.partial! 'api/decks/deck', deck:deck, current_user: @current_user
end
