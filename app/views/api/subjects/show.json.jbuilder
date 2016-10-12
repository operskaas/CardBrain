json.newSubjectId @subject.id
debugger
json.current do
  @subjects.each do |subject|
    json.partial! 'api/subject_follows/subject_follow', subject: subject, current_user: @current_user
  end
end
