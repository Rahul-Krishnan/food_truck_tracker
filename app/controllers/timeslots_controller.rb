class TimeslotsController < ApplicationController
  def new
    @timeslot = Timeslot.new
  end
end
