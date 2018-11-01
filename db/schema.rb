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

ActiveRecord::Schema.define(version: 2018_07_26_175029) do

  create_table "characters", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "str"
    t.integer "con"
    t.integer "pow"
    t.integer "dex"
    t.integer "app"
    t.integer "siz"
    t.integer "int"
    t.integer "edu"
    t.integer "kick"
    t.integer "avoid"
    t.integer "kumituki"
    t.integer "kobusi"
    t.integer "zutuki"
    t.integer "touteki"
    t.integer "ma-sharu"
    t.integer "kenjyuu"
    t.integer "sabumasi"
    t.integer "shottogan"
    t.integer "masingan"
    t.integer "raihuru"
    t.integer "teate"
    t.integer "kagiake"
    t.integer "kakusu"
    t.integer "kakureru"
    t.integer "kikimimi"
    t.integer "sinobiaruki"
    t.integer "shasin"
    t.integer "seisin"
    t.integer "tuiseki"
    t.integer "touhan"
    t.integer "toshokan"
    t.integer "mebosi"
    t.integer "unten"
    t.integer "kikaishuuri"
    t.integer "jyuukikai"
    t.integer "jyouba"
    t.integer "suiei"
    t.integer "soujyuu"
    t.integer "tyouyaku"
    t.integer "denki"
    t.integer "nabi"
    t.integer "hennsou"
    t.integer "iikurume"
    t.integer "sinyou"
    t.integer "setoku"
    t.integer "negiri"
    t.integer "bokokugo"
    t.integer "igaku"
    t.integer "okaruto"
    t.integer "kagaku"
    t.integer "kutoruhu"
    t.integer "geijyutu"
    t.integer "keiri"
    t.integer "koukogaku"
    t.integer "konpyu"
    t.integer "sinrigaku"
    t.integer "jinruigaku"
    t.integer "seibutugaku"
    t.integer "tisitugaku"
    t.integer "densikougaku"
    t.integer "tenmongaku"
    t.integer "buturigaku"
    t.integer "houritu"
    t.integer "yakugaku"
    t.integer "rekisi"
    t.integer "free1"

  end

  create_table "skills", force: :cascade do |t|
    t.integer "character_id"
    t.string "name"
    t.integer "default"
    t.integer "sum"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_skills_on_character_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

end
