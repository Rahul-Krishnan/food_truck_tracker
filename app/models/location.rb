class Location < ApplicationRecord
  has_many :appointments
  has_many :favorite_locations
  validates :address, presence: true
  geocoded_by :address   # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates
end
