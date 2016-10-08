# == Schema Information
#
# Table name: decks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  subject_id :integer          not null
#  objective  :text
#

class Deck < ActiveRecord::Base
  validates :title, :subject, presence: true

  belongs_to :subject

  has_one :owner,
    through: :subject,
    source: :owner
    
end
