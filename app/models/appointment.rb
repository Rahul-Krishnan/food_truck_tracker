class Appointment < ApplicationRecord
  belongs_to :truck
  belongs_to :location
  belongs_to :timeslot

  validates :location, presence: true
  validates :timeslot, presence: true
  validates :truck, presence: true, uniqueness: { scope: :timeslot }

  scope :for_day_of_week, -> (day) { joins(:timeslot).where("day = ?", day) }
end
