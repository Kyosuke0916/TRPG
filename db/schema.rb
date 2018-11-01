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
    t.integer "avoid"
    t.integer "kick"
    t.integer "kumituki"
    t.integer "kobusi"
    t.integer "dutuki"
    t.integer "touteki"
    t.integer "masharu"
    t.integer "kenjyuu"
    t.integer "sabumasi"
    t.integer "shottogun"
    t.integer "masingun"
    t.integer "raihuru"
    t.integer "oukyuu"
    t.integer "kagi"
    t.integer "kskusu"
    t.integer "kakureru"
    t.integer "kikimimi"
    t.integer "sinobi"
    t.integer "shasin"
    t.integer "seisin"
    t.integer "tuiseki"
    t.integer "touhan"
    t.integer "toshokan"
    t.integer "mebosi"
    t.integer "unten"
    t.integer "shuri"
    t.integer "sousa"
    t.integer "jyouba"
    t.integer "suiei"
    t.integer "seisaku"
    t.integer "soujyuu"
    t.integer "tyouyaku"
    t.integer "denki"
    t.integer "nabi"
    t.integer "hensou"
    t.integer "iiku"
    t.integer "sinyou"
    t.integer "settoku"
    t.integer "negiri"
    t.integer "native"
    t.integer "first"
    t.integer "second"
    t.integer "igaku"
    t.integer "okaruto"
    t.integer "kagaku"
    t.integer "coc"
    t.integer "art"
    t.integer "keiri"
    t.integer "kouko"
    t.integer "comp"
    t.integer "sinri"
    t.integer "human"
    t.integer "seibutu"
    t.integer "tisitu"
    t.integer "densi"
    t.integer "tenmon"
    t.integer "hakubutu"
    t.integer "buturi"
    t.integer "houritu"
    t.integer "yakugaku"
    t.integer "rekisi"
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
