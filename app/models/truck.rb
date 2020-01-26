class Truck < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :favorite_trucks, dependent: :destroy
  validates :name, presence: true, uniqueness: true
end
