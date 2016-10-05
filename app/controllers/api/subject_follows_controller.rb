class Api::SubjectFollowsController < ApplicationController
  def index
    if current_user
      @subjects = current_user.followed_subjects.to_a
      render :index
    else
      render json: [], status: 401
    end
  end
end
