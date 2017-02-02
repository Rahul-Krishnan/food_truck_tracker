require 'rails_helper'
require 'pry'

describe Truck do
  let!(:truck) { FactoryGirl.create(:truck) }

  describe ".new" do
    it "has a name" do
      expect(truck.name).to eq("Chicken & Rice Guys")
    end
  end
end
