@cards.each do |card|
  json.partial! 'api/cards/card', card:card
end
