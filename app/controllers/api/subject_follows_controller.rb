class Api::SubjectFollowsController < ApplicationController

  before_action :ensure_user_logged_in, :index

  def index
    @subjects = current_user.followed_subjects.to_a
  end
end
