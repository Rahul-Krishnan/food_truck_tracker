class RemoveNameFromLocation < ActiveRecord::Migration[5.0]
  def up
    remove_column :locations, :name
  end
  
  def down
    add_column :locations, :name, :string, null: false
  end
end
