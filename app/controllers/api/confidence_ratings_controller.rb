class Api::ConfidenceRatingsController < ApplicationController
  before_action :ensure_user_logged_in

  def create
    @rating = ConfidenceRating.where(card_id: params[:cardId], user: current_user).first
    saved = false
    debugger
    if @rating
      if @rating.update(rating: params[:rating])
        saved = true
      end
    else
      @rating = ConfidenceRating.new(rating_params)
      @rating.user = current_user
      if @rating.save
        saved = true
      end
    end

    if saved
      render :create
    else
      render json: ['invalid rating params'], status: 422
    end
  end

  private

  def rating_params
    params.require(:confidence_rating).permit(:card_id, :rating)
  end

end
