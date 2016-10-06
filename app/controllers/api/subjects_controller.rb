class Api::SubjectsController < ApplicationController

  before_action :ensure_user_logged_in, :create, :destroy, :show

  def create
    @subject = Subject.new(subject_params)
    @subject.owner_id = current_user.id
    @subjects = []
    if @subject.save
      @subjects = current_user.followed_subjects.to_a
      render :show
    else
      render :show, status: 422
    end
  end

  def destroy
  end

  def show
  end

  private

  def subject_params
    params.require(:subject).permit(:title)
  end
end
