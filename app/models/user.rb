class User < ApplicationRecord
  has_many :favorite_trucks
  has_many :favorite_locations
  has_many :favorite_timeslots
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :name, presence: true
  validates :password, presence: true
  validates :password_confirmation presence: true
  validates :email, presence: true, uniqueness: true
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable
end
