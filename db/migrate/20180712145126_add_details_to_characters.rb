class AddDetailsToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :str, :integer
    add_column :characters, :con, :integer
    add_column :characters, :pow, :integer
    add_column :characters, :dex, :integer
    add_column :characters, :app, :integer
    add_column :characters, :siz, :integer
    add_column :characters, :int, :integer
    add_column :characters, :edu, :integer
    add_column :characters, :avoid, :integer
    add_column :characters, :avoid, :integer
  end
end
