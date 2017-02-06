class ScrapeJob < ApplicationJob
  queue_as :default
  require 'nokogiri'
  require 'httparty'

  def self.scrape
    puts "whatup"
  end

  def self.real_scrape
    page = Nokogiri::HTML(HTTParty.get("http://www.cityofboston.gov/foodtrucks/schedule-app-min.asp").body)
    truck_data = page.css("td .com")
    day_data = page.css("td .dow")
    meal_data = page.css("td .tod")
    location_data = page.css("td .loc")
    appointment_data = []
    truck_data.each_with_index do |truck, n|
      long_location = location_data[n].text
      half_location = long_location[/;(.+)/]
      real_location = half_location.last(half_location.length - 1)
      appointment_data << { location: real_location, timeslot: { day: day_data[n].text, time: meal_data[n].text }, truck: truck.text }
    end

    Appointment.destroy_all

    appointment_data.each do |appointment|
      Appointment.create(truck: Truck.find_or_create_by(name: appointment[truck], location: Location.find_or_create_by(address: appointment[location]), timeslot: Timeslot.find_or_create_by(day: appointment[timeslot][day], time: appointment[timeslot][time])))
    end
  end
end
