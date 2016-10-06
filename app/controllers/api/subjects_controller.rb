class Api::SubjectsController < ApplicationController
  def create
    @subject = Subject.new(subject_params)
    @subject.owner_id = current_user.id
    if @subject.save
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
