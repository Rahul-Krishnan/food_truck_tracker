class TrucksController < ApplicationController
  def new
    @truck = Truck.new
  end

  def index
    @trucks = Truck.all
    coordinates = []
    Appointment.for_day_of_week(Date.today.strftime("%A")).each do |appointment|
      coordinates << {
        lat: appointment.location["latitude"],
        long: appointment.location["longitude"],
        id: appointment.truck.id,
        name: appointment.truck.name,
        meal: appointment.timeslot.time,
      }
    end

    @api_key = Rails.application.credentials.google_api_key
    @coordinates = JSON.unparse(coordinates)
  end

  def show
    @truck = Truck.find(params[:id])

    coordinates = []
    @truck.appointments.map do |appointment|
      coordinates << {
        lat: appointment.location["latitude"],
        long: appointment.location["longitude"],
        id: appointment.truck.id,
        day: appointment.timeslot.day,
        meal: appointment.timeslot.time,
      }
    end

    @api_key = Rails.application.credentials.google_api_key
    @coordinates = JSON.unparse(coordinates)
  end
end
