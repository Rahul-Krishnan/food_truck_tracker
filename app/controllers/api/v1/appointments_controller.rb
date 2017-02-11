class Api::V1::AppointmentsController < ApplicationController

  def index
    @appointments = Appointment.all
    render json: {appointments: @appointments}
  end

  def show
    @appointment = Appointment.find(params[:id])
    render json: {appointment: @appointment}
  end

end
