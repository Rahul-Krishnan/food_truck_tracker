class TrucksController < ApplicationController
  def new
    @truck = Truck.new
  end

  def index
    @trucks = Truck.all
    coordinates = []
    lat_lng = {}
    Appointment.for_day_of_week(Date.today.strftime("%A")).each do |appointment|
      latitude = appointment.location.latitude
      longitude = appointment.location.longitude
      curr_lat_lng = "#{latitude},#{longitude}"
      while lat_lng[curr_lat_lng]
        latitude += 0.0005 * (rand(2) * 2 - 1)
        longitude += 0.0005 * (rand(2) * 2 - 1)
        curr_lat_lng = "#{latitude},#{longitude}"
      end
      lat_lng[curr_lat_lng] = true

      coordinates << {
        lat: latitude,
        long: longitude,
        id: appointment.truck.id,
        name: appointment.truck.name,
        meal: appointment.timeslot.time,
      }
    end

    @api_key = Rails.application.credentials.google_api_key
    @coordinates = JSON.unparse(coordinates)
  end

  def show
    @truck = Truck.find(params[:id])

    coordinates = []
    lat_lng = {}
    @truck.appointments.map do |appointment|
      latitude = appointment.location.latitude
      longitude = appointment.location.longitude
      curr_lat_lng = "#{latitude},#{longitude}"
      while lat_lng[curr_lat_lng]
        latitude += 0.0005 * (rand(2) * 2 - 1)
        longitude += 0.0005 * (rand(2) * 2 - 1)
        curr_lat_lng = "#{latitude},#{longitude}"
      end
      lat_lng[curr_lat_lng] = true

      coordinates << {
        lat: latitude,
        long: longitude,
        id: appointment.truck.id,
        day: appointment.timeslot.day,
        meal: appointment.timeslot.time,
      }
    end

    @api_key = Rails.application.credentials.google_api_key
    @coordinates = JSON.unparse(coordinates)
  end
end
