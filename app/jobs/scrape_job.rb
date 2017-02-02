class ScrapeJob < ApplicationJob
  queue_as :default

  def scrape
    puts "whatup"
  end

  require 'httparty'
  require 'Nokogiri'

  def real_scrape
    page = Nokogiri::HTML(HTTParty.get("http://www.cityofboston.gov/foodtrucks/schedule-app-min.asp").body)
    truckData=page.css("td .com")
    dayData=page.css("td .dow")
    mealData=page.css("td .tod")
    locationData=page.css("td .loc")
    appointmentData=[]
    truckData.each_with_index do |truck, n|
      longLocation = locationData[n].text
      halfLocation = longLocation[/;(.+)/]
      realLocation = halfLocation.last(halfLocation.length - 1)
      appointmentData << { location: realLocation, timeslot: { day: dayData[n].text, time: mealData[n].text }, truck: truck.text }
    end
    binding.pry
  end
end
