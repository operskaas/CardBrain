json.title @subject.title
json.id @subject.id
json.author @subject.owner.username

json.decks do
  json.array! @subject.decks do |deck|
    json.title deck.title
    json.numCards deck.cards.length
  end
end
