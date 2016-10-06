class AddUniquenessIndexSubjectTitleOwner < ActiveRecord::Migration
  def change
    remove_index :subjects, column: [:title]
  end
end
