json.set! deck.id do
  json.id deck.id
  json.title deck.title
  json.objective deck.objective
  json.numCards deck.cards.length
  json.mastery 30
end
