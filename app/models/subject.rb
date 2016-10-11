# == Schema Information
#
# Table name: subjects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Subject < ActiveRecord::Base
  validates :title, :owner, presence: true
  validates_uniqueness_of :title, scope: [:owner]

  after_save :ensure_owner_is_following

  belongs_to :owner,
    class_name: 'User',
    foreign_key: :owner_id

  has_many :decks, dependent: :destroy

  def ensure_owner_is_following
    SubjectFollow.find_or_create_by!(subject_id: self.id, follower_id: self.owner.id)
  end

  def user_mastery(user_id)
    total_num_cards = 0
    total_mastery = 0
    self.decks.each do |deck|
      numCards = deck.cards.length
      total_num_cards += numCards
      total_mastery += (deck.user_mastery(user_id).to_f / 100) * numCards
    end

    ((total_mastery / total_num_cards.to_f) * 100).to_i
  end

end
