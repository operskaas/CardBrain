class Api::DecksController < ApplicationController
  before_action :ensure_user_logged_in

  def index
    @decks = Deck.where(subject_id: params[:subjectId]).to_a
  end

  def create
    @deck = Deck.new(deck_params)
    if @deck.save
      @decks = Deck.where(subject_id: params[:deck][:subject_id])
      render :index
    else
      render json: ['invalid deck params'], status: 422;
    end
  end

  private

  def deck_params
    params.require(:deck).permit(:title, :subject_id, :objective)
  end
end
