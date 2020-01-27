require "rails_helper"

RSpec.describe Location, type: :model do
  describe "associations" do
    it { should have_many(:appointments).dependent(:destroy) }
    it { should have_many(:favorite_locations).dependent(:destroy) }
  end

  describe 'validations' do
    it { should validate_presence_of(:address) }
  end

  describe "methods" do
    describe "#short_address?" do
      it "should shorten only relevant address with long Boston tail" do
        location1 = create(:location, address: 'Random place, Boston, Suffolk County, Massachusetts')
        location2 = create(:location, address: 'Random other address')

        expect(location1.short_address).to eq("Random place")
        expect(location2.short_address).to eq("Random other address")
      end
    end
  end
end
