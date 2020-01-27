class TrucksController < ApplicationController
  def new
    @truck = Truck.new
  end

  def index
    @trucks = Truck.all
    appointments = Appointment.for_day_of_week(Time.current.strftime("%A"))
    coordinates = AppointmentsCoordinatesFinder.perform(appointments: appointments)

    @api_key = Rails.application.credentials.google_api_key
    @coordinates = JSON.unparse(coordinates)
  end

  def show
    @truck = Truck.find(params[:id])

    coordinates = AppointmentsCoordinatesFinder.perform(appointments: @truck.appointments)

    @api_key = Rails.application.credentials.google_api_key
    @coordinates = JSON.unparse(coordinates)
  end
end
