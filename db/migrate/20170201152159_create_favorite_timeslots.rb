class CreateFavoriteTimeslots < ActiveRecord::Migration[5.0]
  def change
    create_table :favorite_timeslots do |t|
      t.belongs_to :user, null: false
      t.belongs_to :timeslot, null: false
      t.timestamps
    end
    add_index :favorite_timeslots, [:user_id, :timeslot_id], unique: true
  end
end
