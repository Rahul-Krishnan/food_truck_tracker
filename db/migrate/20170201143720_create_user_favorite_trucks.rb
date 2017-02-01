class CreateUserFavoriteTrucks < ActiveRecord::Migration[5.0]
  def change
    create_table :favorite_trucks do |t|
      t.belongs_to :user, null: false
      t.belongs_to :truck, null: false
      t.timestamps
    end
    add_index :favorite_trucks, [:user_id, :truck_id], unique: true
  end
end
