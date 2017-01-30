class TrucksController < ApplicationController
  def new
    @truck = Truck.new
  end
end
