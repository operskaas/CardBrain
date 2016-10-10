class Api::CardsController < ApplicationController
  before_action :ensure_user_logged_in

  def index
    @deck = Deck.find(params[:deckId])
    @cards = Card.where(deck: @deck)
  end

  def create
    @deck = Deck.find(params[:deckId])
    unless current_user == @deck.owner
      render json: ['not your deck, bro'], status: 422
    end

    if params[:cards] # An empty cards form will not even send up a key of cards
      @new_cards = params[:cards].map do |card|
        card[1]
      end
    else
      @new_cards = []
    end

    @deck.cards.each do |old_card|
      old_card.destroy unless old_card_exists_in_new_cards?(old_card)
    end

    @new_cards.each do |new_card|
      if new_card['id']
        old_card = Card.find(new_card['id'])
        if old_card && @deck.cards.include?(old_card)
          old_card.update(answer_text: new_card['answerText'], question_text: new_card['questionText'])
        end
      else
        Card.create(answer_text: new_card['answerText'], question_text: new_card['questionText'], deck: @deck)
      end
    end
    @cards = Card.where(deck_id: params[:deckId])
  end

  private

  def old_card_exists_in_new_cards?(old_card)
    exists = false
    old_id = old_card.id
    @new_cards.each do |new_card|
      if new_card['id'] && new_card['id'].to_i == old_card.id
        exists = true
      end
    end
    exists
  end
end
