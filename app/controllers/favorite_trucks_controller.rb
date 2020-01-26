class FavoriteTrucksController < ApplicationController
  def new
    @truck = FavoriteTruck.new
  end

  def index
    coordinates = []
    lat_lng = {}
    current_user.trucks.each do |truck|
      truck.appointments.for_day_of_week(Date.today.strftime("%A")).each do |appointment|
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
          name: appointment.truck.name,
          id: appointment.truck.id,
          meal: appointment.timeslot.time
        }
      end
    end
    @api_key = Rails.application.credentials.google_api_key
    @coordinates = JSON.unparse(coordinates)
  end

  def show
    @truck = FavoriteTruck.find(params[:id])
  end

  def create
    FavoriteTruck.create(truck: Truck.find(params[:truck]), user: current_user)
    redirect_to favorite_trucks_path
  end

  def destroy
    @favorite_truck = current_user.favorite_trucks.find_by(truck: params[:truck])
    FavoriteTruck.destroy(@favorite_truck.id)
    redirect_to trucks_path
  end
end
