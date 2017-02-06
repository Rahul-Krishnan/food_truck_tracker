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
    @truck = FavoriteTruck.where(truck: params[:id], user: current_user)
    FavoriteTruck.destroy(@truck[0].id)
    render :index
  end
end
