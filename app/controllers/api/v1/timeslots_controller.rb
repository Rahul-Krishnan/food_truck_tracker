class Api::V1::TimeslotsController < ApplicationController
  respond_to :json

  def index
    @timeslots = Timeslot.all
    render json: @timeslots
  end
end
