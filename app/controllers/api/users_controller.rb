class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      @current_user = current_user
      render :show
    else
      render :show, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
