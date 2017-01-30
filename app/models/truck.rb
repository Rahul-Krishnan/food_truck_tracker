class Truck < ApplicationRecord
  has_many :appointments
  validates :name, presence: true, uniqueness: true
  validates :category, presence: true
end
