class AddTruckUrl < ActiveRecord::Migration[5.0]
  def change
    add_column :trucks, :url, :string
  end
end
