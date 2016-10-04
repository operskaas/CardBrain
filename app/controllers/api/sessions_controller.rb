class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:username], params[:password])
    if @user.nil?
      @current_user = {}
      render json: {errors: ['invalid credentials']}, status: 404
    else
      log_in(@user)
      @current_user = current_user
      render :create
    end

  end

  def destroy
    if current_user
      log_out_current_user
      render json: ['logged out successfully'] # should be {}
    else
      render json: {errors: ['no current user']}, status: 404
    end
  end
end
