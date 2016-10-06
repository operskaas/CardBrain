class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: {errors: ['Invalid username or password']}, status: 404
    else
      log_in(@user)
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
