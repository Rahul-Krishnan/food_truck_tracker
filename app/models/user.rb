class User < ApplicationRecord
  has_many :favorite_trucks
  has_many :trucks, through: :favorite_trucks
  has_many :favorite_locations
  has_many :favorite_timeslots
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :password, presence: true
  validates :email, presence: true, uniqueness: true
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  def is_truck_favorite?(truck)
    favorite_trucks.include?(truck)
  end

  def is_location_favorite?(location)
    favorite_locations.include?(location)
  end

  def is_timeslot_favorite?(timeslot)
    favorite_timeslots.include?(timeslot)
  end
end
