class CreateSubjectFollows < ActiveRecord::Migration
  def change
    create_table :subject_follows do |t|
      t.integer :follower_id, null: false
      t.integer :subject_id, null: false

      t.timestamps null: false
    end

    add_index :subject_follows, :follower_id
    add_index :subject_follows, [:subject_id, :follower_id], unique: true
  end
end
