class SubjectFollow < ActiveRecord::Base
  validates :follower, :subject, presence: true
  validates_uniqueness_of :follower, scope: [:subject]

  belongs_to :follower,
    class_name: 'User',
    foreign_key: :follower_id

  belongs_to :subject
end
