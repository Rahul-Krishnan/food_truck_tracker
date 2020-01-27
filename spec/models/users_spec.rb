require "rails_helper"

RSpec.describe User, type: :model do
  describe "associations" do
    it { should have_many(:favorite_trucks).dependent(:destroy) }
    it { should have_many(:trucks).through(:favorite_trucks) }
    it { should have_many(:truck_appointments).class_name(Appointment).through(:trucks) }
    it { should have_many(:favorite_timeslots).dependent(:destroy) }
    it { should have_many(:timeslots).through(:favorite_timeslots) }
    it { should have_many(:timeslot_appointments).class_name(Appointment).through(:timeslots) }
    it { should have_many(:favorite_locations).dependent(:destroy) }
    it { should have_many(:locations).through(:favorite_locations) }
    it { should have_many(:location_appointments).class_name(Appointment).through(:locations) }
  end

  describe 'validations' do
    it { should validate_presence_of(:password) }
    it { should validate_presence_of(:email) }
  end

  describe "methods" do
    let(:user1) { create(:user) }
    let(:user2) { create(:user) }
    let(:truck1) { create(:truck, name: 'truck 1') }
    let(:truck2) { create(:truck, name: 'truck 2') }
    let(:timeslot1) { create(:timeslot, day: 'Tuesday') }
    let(:timeslot2) { create(:timeslot, day: 'Wednesday') }
    let(:location1) { create(:location, address: 'location 1') }
    let(:location2) { create(:location, address: 'location 2') }

    describe "#is_truck_favorite?" do
      it "should return true if truck is a favorite, false otherwise" do
        create(:favorite_truck, user: user1, truck: truck1)
        create(:favorite_truck, user: user2, truck: truck2)

        expect(user1.is_truck_favorite?(truck1)).to be true
        expect(user1.is_truck_favorite?(truck2)).to be false
        expect(user2.is_truck_favorite?(truck1)).to be false
        expect(user2.is_truck_favorite?(truck2)).to be true
      end
    end

    describe "#is_timeslot_favorite?" do
      it "should return true if timeslot is a favorite, false otherwise" do
        create(:favorite_timeslot, user: user1, timeslot: timeslot1)
        create(:favorite_timeslot, user: user2, timeslot: timeslot2)

        expect(user1.is_timeslot_favorite?(timeslot1)).to be true
        expect(user1.is_timeslot_favorite?(timeslot2)).to be false
        expect(user2.is_timeslot_favorite?(timeslot1)).to be false
        expect(user2.is_timeslot_favorite?(timeslot2)).to be true
      end
    end

    describe "#is_location_favorite?" do
      it "should return true if location is a favorite, false otherwise" do
        create(:favorite_location, user: user1, location: location1)
        create(:favorite_location, user: user2, location: location2)

        expect(user1.is_location_favorite?(location1)).to be true
        expect(user1.is_location_favorite?(location2)).to be false
        expect(user2.is_location_favorite?(location1)).to be false
        expect(user2.is_location_favorite?(location2)).to be true
      end
    end
  end
end
