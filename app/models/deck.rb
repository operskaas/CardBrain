# == Schema Information
#
# Table name: decks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  subject_id :integer          not null
#  objective  :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deck < ActiveRecord::Base
  validates :title, :subject, presence: true

  belongs_to :subject

  has_many :cards, dependent: :destroy

  has_one :owner,
    through: :subject,
    source: :owner

  def user_mastery(user_id)

    ratings_sum = 0
    num_cards = 0

    self.cards.each do |card|
      c_rating = ConfidenceRating.where(card: card, user_id: user_id).first
      num_cards += 1
      if c_rating
        ratings_sum += c_rating.rating
      end
    end

    return 0 if num_cards == 0
    ((ratings_sum.to_f / (num_cards * 5).to_f) * 100).to_i
  end
end
