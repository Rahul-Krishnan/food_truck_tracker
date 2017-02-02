class ScrapeJob < ApplicationJob
  queue_as :default

  def scrape
    puts "whatup"
  end

  require 'httparty'
  require 'Nokogiri'

  def real_scrape
    page = Nokogiri::HTML(HTTParty.get("http://www.cityofboston.gov/foodtrucks/schedule-app-min.asp").body)
    truck_data = page.css("td .com")
    day_data = page.css("td .dow")
    meal_data = page.css("td .tod")
    location_data = page.css("td .loc")
    appointment_data = []
    truck_data.each_with_index do |truck, n|
      long_location = location_data[n].text
      half_location = longLocation[/;(.+)/]
      real_location = half_location.last(half_location.length - 1)
      appointment_data << { location: real_location, timeslot: { day: day_data[n].text, time: meal_data[n].text }, truck: truck.text }
    end
  end
end
