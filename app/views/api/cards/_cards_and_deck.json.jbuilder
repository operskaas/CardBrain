if cards.empty?
  json.cards({})
else
  json.cards do
    cards.each do |card|
      json.partial! 'api/cards/card', card:card, current_user: current_user
    end
  end
end

json.deck do
  json.id deck.id
  json.title deck.title
end
