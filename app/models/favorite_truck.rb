class FavoriteTruck < ApplicationRecord
  belongs_to :user
  belongs_to :truck
  validates :truck, uniqueness: { scope: :user }
end
