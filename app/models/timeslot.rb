class Timeslot < ApplicationRecord
  has_many :appointments

  validates :day, presence: true, inclusion: { in: %w(Saturday Sunday Monday Tuesday Wednesday Thursday Friday) }
  validates :time, presence: true, inclusion: { in: %w(Breakfast Lunch Dinner) }
end
