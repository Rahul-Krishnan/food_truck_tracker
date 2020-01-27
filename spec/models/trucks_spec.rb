require "rails_helper"

RSpec.describe Truck, type: :model do
  describe "associations" do
    it { should have_many(:appointments).dependent(:destroy) }
    it { should have_many(:favorite_trucks).dependent(:destroy) }
  end

  describe 'validations' do
    subject { build(:truck) }

    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name) }
  end
end
