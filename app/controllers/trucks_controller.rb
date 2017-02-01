class TrucksController < ApplicationController
  def new
    @truck = Truck.new
  end

  def index
    @trucks = Truck.all
  end

  def show
    @truck = Truck.find(params[:truck_id])
  end
end
