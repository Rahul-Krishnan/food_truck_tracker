class CreateFavoriteLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :favorite_locations do |t|
      t.belongs_to :user, null: false
      t.belongs_to :location, null: false
      t.timestamps
    end

    add_index :favorite_locations, [:user_id, :location_id], unique: true
  end
end
