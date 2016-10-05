class Api::SubjectsController < ApplicationController
  def create
    @subject = Subject.create(subject_params)
    if @subject.save
      render :show
    else
      render :show, status: 422
  end

  def destroy
  end

  def show
  end

  private

  def subject_params
    params.requier(:subject).permit(:title, :owner_id)
  end
end
