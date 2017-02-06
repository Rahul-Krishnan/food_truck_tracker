class FavoriteTrucksController < ApplicationController
  def index
    @trucks = Favorite_truck.all
  end
end
