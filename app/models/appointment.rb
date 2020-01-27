class Appointment < ApplicationRecord
  belongs_to :truck
  belongs_to :location
  belongs_to :timeslot

  delegate :day, to: :timeslot
  delegate :time, to: :timeslot
  delegate :name, to: :truck
  delegate :url, to: :truck
  delegate :address, to: :location
  delegate :latitude, to: :location
  delegate :longitude, to: :location

  validates :location, presence: true
  validates :timeslot, presence: true
  validates :truck, presence: true, uniqueness: { case_sensitive: false, scope: :timeslot_id }

  scope :for_day_of_week, -> (day) { joins(:timeslot).where("day = ?", day) }
end
