require 'spec_helper'

describe Truck do
  let!(:truck) { FactoryGirl.create(:truck) }

  describe ".new" do
    it "has a name" do
      expect(truck.name).to eq("Chicken & Rice Guys")
    end

    it "has a category" do
      expect(truck.category).to eq("Middle Eastern")
    end
  end
end
