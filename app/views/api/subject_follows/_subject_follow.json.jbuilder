json.set! subject.id do
  json.title subject.title
  json.mastery subject.user_mastery(current_user.id)
  json.owner (current_user.id == subject.owner.id)
  json.id subject.id
end
