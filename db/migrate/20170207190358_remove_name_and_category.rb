class RemoveNameAndCategory < ActiveRecord::Migration[5.0]
  def up
    remove_column :trucks, :category
    remove_column :locations, :name
  end
  def down
    add_column :trucks, :category, :string, null: false
    add_column :locations, :name, :string, null: false
  end
end
