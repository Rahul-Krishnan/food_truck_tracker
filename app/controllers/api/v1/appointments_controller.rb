class Api::V1::AppointmentsController < ApplicationController

  def index
    @appointments = []
    Appointment.find_each do |appointment|
      @appointments << {
        "truck": appointment.truck.name,
        "location": appointment.location.address,
        "day": appointment.timeslot.day,
        "time": appointment.timeslot.time,
      }
    end

    render json: { appointments: @appointments }
  end

  def show
    @appointment = Appointment.find(params[:id])

    render json: { appointment: @appointment }
  end
end
