class CreateAppointments < ActiveRecord::Migration[5.0]
  def change
    create_table :appointments do |t|
      t.belongs_to :truck, null: false
      t.belongs_to :timeslot, null: false
      t.belongs_to :location, null: false
      t.timestamps
    end

    add_index :appointments, [:truck_id, :timeslot_id, :location_id], unique: true
  end
end
