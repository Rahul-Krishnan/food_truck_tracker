class FavoriteTrucksController < ApplicationController
  def new
    @truck = FavoriteTruck.new
  end

  def index
    coordinates = []
    current_user.trucks.each do |truck|
      truck.appointments.for_day_of_week(Date.today.strftime("%A")).each do |appointment|
        coordinates << {
          lat: appointment.location["latitude"],
          long: appointment.location["longitude"],
          name: appointment.truck["name"],
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
