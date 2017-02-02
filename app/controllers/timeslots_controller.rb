class TimeslotsController < ApplicationController
  def new
    @timeslot = Timeslot.new
  end

  def index
    @timeslots = Timeslot.all
  end

  def show
    @timeslot = Timeslot.find(params[:timeslot_id])
  end
end
