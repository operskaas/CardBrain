class Api::CardsController < ApplicationController
  before_action :ensure_user_logged_in

  def index
    @cards = Cards.where(deck_id: params[:deckId])
    
  end


end
