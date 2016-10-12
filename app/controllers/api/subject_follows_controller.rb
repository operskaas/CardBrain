class Api::SubjectFollowsController < ApplicationController

  before_action :ensure_user_logged_in

  def index
    @subjects = current_user.followed_subjects.to_a
    @activeId = @subjects.first.id unless @subjects.empty?
    @current_user = current_user
  end

  def create
    @subject_follow = SubjectFollow.new(subject_follow_params)

    if @subject_follow.save
      render :create
    else
      render json: ['invalid subject_follow params'], status: 422
    end
  end

  private

  def subject_follow_params
    params.require(:subject_follow).permit(:follower_id, :subject_id)
  end

end
