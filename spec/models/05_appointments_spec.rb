require 'spec_helper'

describe Appointment do
  let!(:truck) { FactoryBot.create(:truck) }
  let!(:timeslot) { FactoryBot.create(:timeslot) }
  let!(:location) { FactoryBot.create(:location) }
  let!(:user) { FactoryBot.create(:user) }
  let!(:appointment) { FactoryBot.create(:appointment) }

  xdescribe ".new" do
    it "has an address" do
      expect(location.address).to eq("700 Boylston St, Boston, MA 02116")
    end
  end
end
