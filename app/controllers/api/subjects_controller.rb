class Api::SubjectsController < ApplicationController

  before_action :ensure_user_logged_in

  def create
    @subject = Subject.new(subject_params)
    @subject.owner_id = current_user.id
    @subjects = []
    if @subject.save
      @subjects = current_user.followed_subjects.to_a
      @activeId = @subject.id
      render 'api/subject_follows/index'
    else
      render :show, status: 422
    end
  end

  def update
    @subject = Subject.find(params[:id])
    if @subject && (@subject.owner == current_user)
      if @subject.update(subject_params)
        @subjects = current_user.followed_subjects.to_a
        @activeId = @subject.id
        render 'api/subject_follows/index'
      else
        render json: ['invalid parameters'], status: 422
      end
    else
      render json: ["subject doesn't exist, or you are not the owner"], status: 403
    end
  end

  def destroy
  end

  private

  def subject_params
    params.require(:subject).permit(:title)
  end
end
