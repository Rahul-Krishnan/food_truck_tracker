class Timeslot < ApplicationRecord
  has_many :appointments
  has_many :favorite_timeslots
  has_many :users, through: :favorite_timeslots
  validates :day, presence: true, inclusion: { in:
    %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday) }
  validates :time, presence: true, inclusion: { in: %w(Breakfast Lunch Dinner Late-night) }
end
