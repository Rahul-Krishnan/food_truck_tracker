class Api::V1::TimeslotsController < ApplicationController

  def index
    @timeslots = Timeslot.all
    render json: {timeslots: @timeslots}
  end

  def show
    @timeslot = Timeslot.find(params[:id])
    render json: {timeslot: @timeslot}
  end

end
