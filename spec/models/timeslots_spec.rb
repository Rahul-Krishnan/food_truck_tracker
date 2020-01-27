require "rails_helper"

RSpec.describe Timeslot, type: :model do
  describe "associations" do
    it { should have_many(:appointments).dependent(:destroy) }
    it { should have_many(:favorite_timeslots).dependent(:destroy) }
  end

  describe 'validations' do
    it { should validate_presence_of(:day) }
    it { should validate_presence_of(:time) }
    it { should validate_inclusion_of(:day).in_array(
      %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday)
    )}
    it { should validate_inclusion_of(:time).in_array(
      %w(Breakfast Lunch Dinner Late-night)
    )}
  end
end
