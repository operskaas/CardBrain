json.set! card.id do
  json.id card.id
  json.questionText card.question_text
  json.answerText card.answer_text
  json.rating card.user_rating(current_user.id)
end
