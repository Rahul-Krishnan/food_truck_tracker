class Location < ApplicationRecord
  has_many :appointments

  validates :name, presence: true
  validates :address, presence: true
end
