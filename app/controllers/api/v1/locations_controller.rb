class Api::V1::LocationsController < ApplicationController
  respond_to :json

  def index
    @locations = Location.all
    render json: @locations
  end
end
