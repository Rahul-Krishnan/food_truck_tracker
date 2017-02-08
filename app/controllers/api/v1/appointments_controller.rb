class Api::V1::AppointmentsController < ApplicationController

  def index
    @appointments = Appointment.all
    render json: {appointments: @appointments}
  end

  def show
    @appointments = Appointment.all
    render json: {appointments: @appointments}
  end

end
