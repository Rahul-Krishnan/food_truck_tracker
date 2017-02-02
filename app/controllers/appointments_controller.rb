class AppointmentsController < ApplicationController
  def new
    @appointment = Appointment.new
  end

  def index
    @appointments = Appointment.all
  end

  def show
    @appointment = Appointment.find(params[:location_id])
  end
end
