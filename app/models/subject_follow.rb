# == Schema Information
#
# Table name: subject_follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  subject_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class SubjectFollow < ActiveRecord::Base
  validates :follower, :subject, presence: true
  validates_uniqueness_of :follower, scope: [:subject]

  belongs_to :follower,
    class_name: 'User',
    foreign_key: :follower_id

  belongs_to :subject
end
