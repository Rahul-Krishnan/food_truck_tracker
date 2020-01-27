require "rails_helper"

describe AppointmentsCoordinatesFinder do
  let!(:location) { create(:location) }
  let!(:appointments) { create_list(:appointment, 10, location: location) }
  
  it "returns coordinates array" do
    coordinates = AppointmentsCoordinatesFinder.perform(appointments: appointments)
    
    expect(coordinates).to be
    expect(coordinates.length).to eq(appointments.length)
    expect(coordinates[0][:day]).to be
    expect(coordinates[0][:id]).to be
    expect(coordinates[0][:lat]).to be
    expect(coordinates[0][:long]).to be
    expect(coordinates[0][:meal]).to be
    expect(coordinates[0][:name]).to be
  end

  it "returns non-repeating coordinate latitude & longitude" do
    coordinates = AppointmentsCoordinatesFinder.perform(appointments: appointments)

    expect(coordinates).to be

    lat_lng = coordinates.map { |c| "#{c[:lat]},#{c[:long]}" }
    expect(lat_lng.uniq.length).to eq(lat_lng.length)
  end
end
