class Truck < ApplicationRecord
  has_many :appointments
  has_many :favorite_trucks
  has_many :users, through: :favorite_trucks
  validates :name, presence: true, uniqueness: true
  validates :category, presence: true
end
