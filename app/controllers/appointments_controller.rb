class AppointmentsController < ApplicationController
  def new
    @appointment = Appointment.new
  end

  def index
    @appointments = Appointment.all
  end

end
