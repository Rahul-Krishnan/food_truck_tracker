class Appointment < ApplicationRecord
  belongs_to :truck
  belongs_to :location
  belongs_to :timeslot
  
  validates :location, presence: true, uniqueness: true
  validates :timeslot, presence: true
  validates :truck, presence: true, uniqueness: { scope: :timeslot }
  t.timestamps
end
