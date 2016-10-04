# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :session_token, presence: true, uniqueness: true;
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  def self.find_by_credentials(un, pw)
    user = User.find_by_username(un);
    return nil if user.nil?
    if user.is_password?(pw)
      user
    else
      nil
    end
  end

  def is_password?(pw)
    BCrypt::Password.new(self.session_token).is_password?(pw)
  end

  def password=(pw)
    @passwod = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def ensure_session_token
    self.session_token ||= reset_session_token!
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save
    self.session_token
  end

  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64(16)
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64(16)
    end
    token
  end
  
end
