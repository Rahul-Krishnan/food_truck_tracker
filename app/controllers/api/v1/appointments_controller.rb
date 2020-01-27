class Api::V1::AppointmentsController < ApplicationController

  def index
    appointments = Appointment.all

    render(
      json: appointments,
      status: :ok,
      each_serializer: AppointmentSerializer
    )
  end

  def show
    appointment = Appointment.find(params[:id])

    render(
      json: appointment,
      status: :ok
    )
  end
end
