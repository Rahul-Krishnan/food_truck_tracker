require 'spec_helper'

describe Appointment do
  let!(:truck) { FactoryGirl.create(:truck) }
  let!(:timeslot) { FactoryGirl.create(:timeslot) }
  let!(:location) { FactoryGirl.create(:location) }
  let!(:user) { FactoryGirl.create(:user) }
  let!(:appointment) { FactoryGirl.create(:appointment) }

  xdescribe ".new" do
    it "has an address" do
      expect(location.address).to eq("700 Boylston St, Boston, MA 02116")
    end
  end
end
