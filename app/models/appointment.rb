class Appointment < ApplicationRecord
  belongs_to :location
  belongs_to :timeslot
  belongs_to :truck

  validates :location, presence: true
  validates :timeslot, presence: true
  validates :truck, presence: true, uniqueness: { scope: :timeslot }
end
