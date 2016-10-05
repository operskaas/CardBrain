class Api::SubjectFollowsController < ApplicationController
  def index
    if current_user
      @current_user_followed_subjects = current_user.followed_subjects
      render json: @current_user_followed_subjects
    else
      render json: []
    end
  end
end
