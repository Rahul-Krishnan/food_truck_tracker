class LocationsController < ApplicationController
  def new
    @location = Location.new
  end

  def index
    @locations = Location.all
  end

  def show
    @location = Location.find(params[:location_id])
  end
end
