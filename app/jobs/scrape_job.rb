class ScrapeJob < ApplicationJob
  queue_as :default

  def scrape
    puts "whatup"
  end

  require 'httparty'
  require 'Nokogiri'
  require 'open-uri'

  def real_scrape
    page = Nokogiri::HTML(HTTParty.get("http://www.cityofboston.gov/foodtrucks/schedule-app-min.asp").body)
    truckData=page.css("td .com")
    dayData=page.css("td .dow")
    mealData=page.css("td .tod")
    locationData=page.css("td .loc")
    appointmentData={}
    truckData.each_with_index do |truck, n|
      appointment[n] = Appointment.new{ location: locationData[n].text, timeslot: { day: dayData[n].text, time: mealData[n].text }, truck: truck.text }
    end
  end
end
