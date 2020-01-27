require "rails_helper"

RSpec.describe Location, type: :model do
  describe "associations" do
    it { should have_many(:appointments).dependent(:destroy) }
    it { should have_many(:favorite_locations).dependent(:destroy) }
  end

  describe 'validations' do
    it { should validate_presence_of(:address) }
  end
end
