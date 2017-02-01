class FavoriteTruck < ApplicationRecord
  belongs_to :user
  belongs_to :truck

  validates :user, presence: true
  validates :truck, presence: true
  validates :truck, uniqueness: { scope: :user}
end
