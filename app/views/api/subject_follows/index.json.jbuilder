json.active @subjects.first.id

json.current do
  @subjects.each do |subject|
    json.partial! 'api/subject_follows/subject_follow', subject: subject
  end
end
