class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.references :character, foreign_key: true
      t.string :name
      t.integer :default
      t.integer :sum

      t.timestamps
    end
  end
end
