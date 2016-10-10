class CreateConfidenceRatings < ActiveRecord::Migration
  def change
    create_table :confidence_ratings do |t|
      t.integer :card_id, null: false
      t.integer :user_id, null: false
      t.integer :rating, null: false

      t.timestamps null: false
    end

    add_index :confidence_ratings, :card_id
    add_index :confidence_ratings, [:user_id, :card_id], unique: true
  end
end
