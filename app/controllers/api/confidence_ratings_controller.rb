class Api::ConfidenceRatingsController < ApplicationController
  before_action :ensure_user_logged_in

  def create
    @rating = ConfidenceRating.where(card_id: params[:confidence_rating][:card_id], user: current_user).first
    saved = false
    if @rating
      if @rating.update(rating: params[:confidence_rating][:rating])
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
      @card = @rating.card
      @current_user = current_user
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
