json.set! subject.id do
  json.title subject.title
  json.mastery 40
  json.owner (current_user.id == subject.owner.id)
end
# json.mastery subject.mastery
