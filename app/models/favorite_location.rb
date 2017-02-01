class FavoriteLocation < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :user, presence: true
  validates :location, presence: true
  validates :location, uniqueness: { scope: :user}
end
