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
end
