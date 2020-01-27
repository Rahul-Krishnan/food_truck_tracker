require "rails_helper"

RSpec.describe Appointment, type: :model do
  describe "associations" do
    it { should belong_to(:truck) }
    it { should belong_to(:location) }
    it { should belong_to(:timeslot) }
  end

  describe 'validations' do
    subject { build(:appointment) }

    it { should validate_presence_of(:location) }
    it { should validate_presence_of(:timeslot) }
    it { should validate_presence_of(:truck) }
    it { should validate_uniqueness_of(:truck).scoped_to(:timeslot_id) }
  end

  describe "scopes" do
    describe ".for_day_of_week" do
      it "should return apointments only for a speicifc day of the week" do
        timeslot1 = create(:timeslot, day: "Tuesday")
        timeslot2 = create(:timeslot, day: "Wednesday")
        timeslot3 = create(:timeslot, day: "Thursday")
        timeslot4 = create(:timeslot, day: "Friday")

        appointment1 = create(:appointment, timeslot: timeslot1)
        appointment2 = create(:appointment, timeslot: timeslot2)
        appointment3 = create(:appointment, timeslot: timeslot3)
        appointment4 = create(:appointment, timeslot: timeslot4)

        results = Appointment.for_day_of_week("Wednesday")
        expect(results).not_to include(appointment1)
        expect(results).not_to include(appointment3)
        expect(results).not_to include(appointment4)
        expect(results).to include(appointment2)
      end
    end
  end
end
