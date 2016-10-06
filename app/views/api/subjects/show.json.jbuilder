json.id @subject.id

json.errors do
  json.array! @subject.errors
end
