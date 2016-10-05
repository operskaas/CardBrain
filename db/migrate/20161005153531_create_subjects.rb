class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false

      t.timestamps null: false
    end

    add_index :subjects, :title
    add_index :subjects, :owner_id
  end
end
