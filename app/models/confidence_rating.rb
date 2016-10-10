# == Schema Information
#
# Table name: confidence_ratings
#
#  id         :integer          not null, primary key
#  card_id    :integer          not null
#  user_id    :integer          not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ConfidenceRating < ActiveRecord::Base
  validates :card, :user, :rating, presence: true
  validates_uniqueness_of :card, scope: [:user]

  belongs_to :card

  belongs_to :user
  
end
