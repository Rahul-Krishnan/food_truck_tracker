class Location < ApplicationRecord
  has_many :appointments
  validates :name, presence: true, uniqueness: true
  validates :address, presence: true
end
