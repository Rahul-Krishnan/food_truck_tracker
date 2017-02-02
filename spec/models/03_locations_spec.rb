require 'spec_helper'

describe Location do
  let!(:location) { FactoryGirl.create(:location) }

  describe ".new" do
    it "has an address" do
      expect(location.address).to eq("700 Boylston St, Boston, MA 02116")
    end
  end
end
