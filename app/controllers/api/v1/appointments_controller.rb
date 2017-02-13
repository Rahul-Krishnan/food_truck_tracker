class Api::V1::AppointmentsController < ApplicationController

  def index
    @appointments = []
    @appointment_ids = Appointment.all
    @appointment_ids.each do |appointment|
      @truck = Truck.find(appointment[:truck_id])
      @location = Location.find(appointment[:location_id])
      @timeslot = Timeslot.find(appointment[:timeslot_id])
      @appointments << { "truck": @truck.name, "location": @location.address, "day": @timeslot.day, "time": @timeslot.time }
    end
    render json: {appointments: @appointments}
  end

  def show
    @appointment = Appointment.find(params[:id])
    render json: {appointment: @appointment}
  end

end
