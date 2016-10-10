json.set! card.id do
  json.id card.id
  json.questionText card.question_text
  json.answerText card.answer_text
  json.currentUserRating card.current_user_rating
end
