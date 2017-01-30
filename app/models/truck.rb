class Truck < ApplicationRecord
  has_many :appointments

  validates :name, presence: true
  validates :category, presence: true
end
