class CreateTimeslots < ActiveRecord::Migration[5.0]
  def change
    create_table :timeslots do |t|
      t.string :day, null: false
      t.string :time, null: false
      t.timestamps
    end
  end
end
