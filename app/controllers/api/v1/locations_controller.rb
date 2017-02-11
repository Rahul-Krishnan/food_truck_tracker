class Api::V1::TrucksController < ApplicationController

  def index
    @trucks = Truck.all
    render json: {trucks: @trucks}
  end

  def show
    @truck = Truck.find(params[:id])
    render json: {truck: @truck}
  end

end
