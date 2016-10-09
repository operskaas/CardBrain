class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :deck_id, null: false
      t.text :question_text, null: false
      t.text :answer_text

      t.timestamps null: false
    end

    add_index :cards, :deck_id
  end
end
