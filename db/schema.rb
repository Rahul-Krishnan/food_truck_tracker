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

ActiveRecord::Schema.define(version: 20170201152159) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.integer  "truck_id",    null: false
    t.integer  "timeslot_id", null: false
    t.integer  "location_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["location_id"], name: "index_appointments_on_location_id", using: :btree
    t.index ["timeslot_id"], name: "index_appointments_on_timeslot_id", using: :btree
    t.index ["truck_id", "timeslot_id", "location_id"], name: "index_appointments_on_truck_id_and_timeslot_id_and_location_id", unique: true, using: :btree
    t.index ["truck_id"], name: "index_appointments_on_truck_id", using: :btree
  end

  create_table "favorite_locations", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "location_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["location_id"], name: "index_favorite_locations_on_location_id", using: :btree
    t.index ["user_id", "location_id"], name: "index_favorite_locations_on_user_id_and_location_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_favorite_locations_on_user_id", using: :btree
  end

  create_table "favorite_timeslots", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "timeslot_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["timeslot_id"], name: "index_favorite_timeslots_on_timeslot_id", using: :btree
    t.index ["user_id", "timeslot_id"], name: "index_favorite_timeslots_on_user_id_and_timeslot_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_favorite_timeslots_on_user_id", using: :btree
  end

  create_table "favorite_trucks", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "truck_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["truck_id"], name: "index_favorite_trucks_on_truck_id", using: :btree
    t.index ["user_id", "truck_id"], name: "index_favorite_trucks_on_user_id_and_truck_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_favorite_trucks_on_user_id", using: :btree
  end

  create_table "locations", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "address",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "timeslots", force: :cascade do |t|
    t.string   "day",        null: false
    t.string   "time",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trucks", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "category",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
