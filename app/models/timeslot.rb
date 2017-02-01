class Timeslot < ApplicationRecord
  has_many :appointments
  validates :day, presence: true, inclusion: { in:
    %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday) }
  validates :time, presence: true, inclusion: { in: %w(Breakfast Lunch Dinner Late-night) }
end
