class AddUniqueIndexForSubjectTitleAndOwner < ActiveRecord::Migration
  def change
    add_index :subjects, [:title, :owner_id], unique: true
  end
end
