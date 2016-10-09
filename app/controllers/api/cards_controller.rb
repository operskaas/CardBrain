class Api::CardsController < ApplicationController
  before_action :ensure_user_logged_in

  def index
    @deck = Deck.find(params[:deckId])
    @cards = Card.where(deck: @deck)
  end

  def create
    deck = Deck.find(params[:deckId])
    unless current_user == deck.owner
      render json: ['not your deck, bro'], status: 422
    end
    debugger
    cards = params[:cards].map do |card|
      card[1]
    end
    cards.each do |newCard|
      if newCard['id']
        oldCard = Card.find(newCard['id'])
        if oldCard && deck.cards.include?(oldCard)
          oldCard.update(answer_text: newCard['answerText'], question_text: newCard['questionText'])
        end
      else
        Card.create(answer_text: newCard['answerText'], question_text: newCard['questionText'], deck: deck)
      end
    end
    @cards = Card.where(deck_id: params[:deckId])
    render :index
  end


end
