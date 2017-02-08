class FavoriteTrucksController < ApplicationController
  def new
    @truck = FavoriteTruck.new
  end

  def index
    @trucks = FavoriteTruck.all
    coordinates = []
    if !(current_user.favorite_trucks.nil?)
      current_user.favorite_trucks.each do |fav_truck|
        fav_truck.truck.appointments.map do |appointment|
          if appointment.timeslot.day == Date.today.strftime("%A")
            coordinates << { lat: appointment.location["latitude"], long: appointment.location["longitude"], name: appointment.truck["name"] }
          end
        end
      end
    end
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
    @truck = FavoriteTruck.where(truck: params[:id], user: current_user)
    FavoriteTruck.destroy(@truck[0].id)
    render :index
  end
end
