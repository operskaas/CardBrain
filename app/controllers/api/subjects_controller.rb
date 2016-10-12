class Api::SubjectsController < ApplicationController

  before_action :ensure_user_logged_in

  def create
    @subject = Subject.new(subject_params)
    @subject.owner_id = current_user.id
    @subjects = []
    if @subject.save
      @subjects = current_user_follows
      @activeId = @subject.id
      @current_user = current_user
      render 'api/subject_follows/index'
    else
      render ['invalid subject paramsss'], status: 422
    end
  end

  def show
    @subject = Subject.find(params[:id])
    if @subject
      render :show
    else
      render json: ['subject does not exist'], status: 422
    end
  end

  def update
    @subject = Subject.find(params[:id])
    if @subject && (@subject.owner == current_user)
      if @subject.update(subject_params)
        @subjects = current_user_follows
        @activeId = @subject.id
        @current_user = current_user
        render 'api/subject_follows/index'
      else
        render json: ['invalid parameters'], status: 422
      end
    else
      render json: ["subject doesn't exist, or you are not the owner"], status: 403
    end
  end

  def destroy
    @current_user = current_user
    @subject = Subject.find(params[:id])
    if @subject.owner == @current_user
      @subject.destroy
    else
      @follow = SubjectFollow.find_by(follower: @current_user, subject: @subject)
      @follow.destroy if @follow
    end

    @subjects = current_user_follows
    @activeId = @subjects.first.id unless @subjects.empty?
    render 'api/subject_follows/index'
  end

  private

  def current_user_follows
    current_user.followed_subjects.to_a
  end

  def subject_params
    params.require(:subject).permit(:title)
  end
end
