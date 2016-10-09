class Api::CardsController < ApplicationController
  before_action :ensure_user_logged_in

  def index
    @cards = Card.where(deck_id: params[:deckId])
  end

  def create
    debugger
    @cards = Card.where(deck_id: params[:deckId])
    render :index
  end


end
