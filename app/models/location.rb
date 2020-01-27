class Location < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :favorite_locations, dependent: :destroy
  validates :address, presence: true
  geocoded_by :address   # can also be an IP address
  reverse_geocoded_by :latitude, :longitude
  after_validation :geocode, if: -> (loc) do
    loc.address.present? && loc.address_changed?
  end
  after_validation :reverse_geocode, if: -> (loc) do
    loc.latitude.present? && loc.longitude.present? &&
    (loc.latitude_changed? || loc.longitude_changed?)
  end

  def short_address
    address.split(', Boston, Suffolk County, Massachusetts')[0]
  end
end
