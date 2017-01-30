class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :name, null: false, unique: true
      t.string :address, null: false
      t.timestamps
    end
  end
end
