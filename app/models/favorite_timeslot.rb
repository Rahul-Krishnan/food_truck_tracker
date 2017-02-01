class FavoriteTimeslot < ApplicationRecord
  belongs_to :user
  belongs_to :timeslot

  validates :user, presence: true
  validates :timeslot, presence: true
  validates :timeslot, uniqueness: { scope: :user}
end
