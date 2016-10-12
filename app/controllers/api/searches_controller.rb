class Api::SearchesController < ApplicationController
  def index
    query = params[:query]
    @matched_subjects = Subject.where("title ~* ?", query)
    render :index
  end
end
