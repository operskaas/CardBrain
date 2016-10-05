class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def ensure_user_logged_in
    unless logged_in?
      render json: ['you must be logged in to do that'], status: 401
    end
  end

  def current_user
    @current_user || User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def log_out_current_user
    current_user.reset_session_token!
    @current_user = nil
    session[:session_token] = nil
  end
end
