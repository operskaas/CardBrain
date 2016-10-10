# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161010161701) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.integer  "deck_id",       null: false
    t.text     "question_text", null: false
    t.text     "answer_text"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "cards", ["deck_id"], name: "index_cards_on_deck_id", using: :btree

  create_table "confidence_ratings", force: :cascade do |t|
    t.integer  "card_id",    null: false
    t.integer  "user_id",    null: false
    t.integer  "rating",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "confidence_ratings", ["card_id"], name: "index_confidence_ratings_on_card_id", using: :btree
  add_index "confidence_ratings", ["user_id", "card_id"], name: "index_confidence_ratings_on_user_id_and_card_id", unique: true, using: :btree

  create_table "decks", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "subject_id", null: false
    t.text     "objective"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "decks", ["subject_id"], name: "index_decks_on_subject_id", using: :btree
  add_index "decks", ["title"], name: "index_decks_on_title", using: :btree

  create_table "subject_follows", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "subject_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "subject_follows", ["follower_id"], name: "index_subject_follows_on_follower_id", using: :btree
  add_index "subject_follows", ["subject_id", "follower_id"], name: "index_subject_follows_on_subject_id_and_follower_id", unique: true, using: :btree

  create_table "subjects", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "owner_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "subjects", ["owner_id"], name: "index_subjects_on_owner_id", using: :btree
  add_index "subjects", ["title", "owner_id"], name: "index_subjects_on_title_and_owner_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
