class Api::V1::AppointmentsController < ApplicationController
  respond_to :json

  def index
    @appointments = Appointment.all
    render json: @appointments
  end
end
