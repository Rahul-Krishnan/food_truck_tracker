require "rails_helper"

RSpec.describe Api::V1::AppointmentsController, type: :controller do
  let!(:appointment) do
    FactoryBot.create(:appointment)
  end

  xdescribe "GET#index" do
    it "should return the appointment list" do
      get :index
      json = JSON.parse(response.body)

      expect(json[0]["truck"]).to eq("Chicken & Rice Guys")
    end
  end

  xdescribe "GET#show" do
    it "should return appointment details" do
      get :index, id: 1
      json = JSON.parse(response.body)

      expect(json["truck_id"]).to eq("30")
    end
  end
end
