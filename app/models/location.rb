class Location < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :favorite_locations, dependent: :destroy
  validates :address, presence: true
  geocoded_by :address   # can also be an IP address
  after_validation :geocode          # auto-fetch coordinates
end
