class AppointmentsController < ApplicationController
  respond_to :json

  def new
    @appointment = Appointment.new
  end

  def index
    @appointments = Appointment.all
    render json: @apointments
  end

  def show
    @appointment = Appointment.find(params[:location_id])
  end
end
