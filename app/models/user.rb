class User < ApplicationRecord
  has_many :favorite_trucks, dependent: :destroy
  has_many :trucks, through: :favorite_trucks
  has_many :truck_appointments, through: :trucks, source: :appointments
  has_many :favorite_locations, dependent: :destroy
  has_many :locations, through: :favorite_locations
  has_many :location_appointments, through: :locations, source: :appointments
  has_many :favorite_timeslots, dependent: :destroy
  has_many :timeslots, through: :favorite_timeslots
  has_many :timeslot_appointments, through: :timeslots, source: :appointments
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :password, presence: true
  validates :email, presence: true, uniqueness: true
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  def is_truck_favorite?(truck)
    trucks.include?(truck)
  end

  def is_location_favorite?(location)
    locations.include?(location)
  end

  def is_timeslot_favorite?(timeslot)
    timeslots.include?(timeslot)
  end
end
