require 'spec_helper'

describe Timeslot do
  let!(:timeslot) { FactoryGirl.create(:timeslot) }

  describe ".new" do
    it "has a day" do
      expect(timeslot.day).to eq("Monday")
    end

    it "has a meal time" do
      expect(timeslot.time).to eq("Lunch")
    end
  end
end
