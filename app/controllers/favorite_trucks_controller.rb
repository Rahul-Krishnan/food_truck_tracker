class FavoriteTrucksController < ApplicationController
  def new
    @truck = FavoriteTruck.new
  end

  def index
    appointments = current_user.truck_appointments.for_day_of_week(Time.current.strftime("%A"))
    coordinates = AppointmentsCoordinatesFinder.perform(appointments: appointments)
    
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
