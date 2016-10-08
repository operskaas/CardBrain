class Api::DecksController < ApplicationController
  before_action :ensure_user_logged_in

  def index
    @decks = Deck.where(subject_id: params[:subjectId]).to_a
  end
end
