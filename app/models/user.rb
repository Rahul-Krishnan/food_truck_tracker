class User < ApplicationRecord
  has_many :favorite_trucks
  has_many :favorite_locations
  has_many :favorite_timeslots
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable
end
