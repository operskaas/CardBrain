class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.string :title, null: false
      t.integer :subject_id, null: false
      t.text :objective
    end

    add_index :decks, :subject_id
    add_index :decks, :title
  end
end
