class Api::V1::TrucksController < ApplicationController
  respond_to :json

  def index
    @trucks = Truck.all
    render json: @trucks
  end
end
