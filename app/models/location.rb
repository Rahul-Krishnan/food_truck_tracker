class Location < ApplicationRecord
  has_many :appointments
  has_many :favorite_locations
  has_many :users, through: :favorite_locations
  validates :address, presence: true
end
