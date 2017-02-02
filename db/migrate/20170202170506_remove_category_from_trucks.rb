class RemoveCategoryFromTrucks < ActiveRecord::Migration[5.0]
  def up
    remove_column :trucks, :category
  end

  def down
    add_column :trucks, :category, :string, null: false
  end
end
