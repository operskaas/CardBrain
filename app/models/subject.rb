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

  after_save :ensure_owner_is_following

  belongs_to :owner,
    class_name: 'User',
    foreign_key: :owner_id

  def ensure_owner_is_following
    unless SubjectFollow.find_by(subject_id: self.id, follower_id: self.owner.id)
      SubjectFollow.create!(subject_id: self.id, follower_id: self.owner.id)
    end
  end
end
