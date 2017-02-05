class AppointmentsController < ApplicationController
  def new
    @appointment = Appointment.new

  def index
    @appointments = Appointment.all
  end

end
