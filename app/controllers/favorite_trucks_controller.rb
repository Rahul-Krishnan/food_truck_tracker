class FavoriteTrucksController < ApplicationController
  def new
    @truck = FavoriteTruck.new
  end

  def index
    @trucks = FavoriteTruck.all
  end

  def show
    @truck = FavoriteTruck.find(params[:id])
  end

  def create
    redirect favorite_trucks_path
  end

  def destroy
    @favorite_truck = FavoriteTruck.find(params[:id])
    @favorite_truck.destroy
  end
end
