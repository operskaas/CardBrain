json.newSubjectId @subject.id

json.current do
  @subjects.each do |subject|
    json.partial! 'api/subject_follows/subject_follow', subject: subject
  end
end
