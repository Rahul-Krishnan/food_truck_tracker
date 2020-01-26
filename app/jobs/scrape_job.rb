class ScrapeJob < ApplicationJob
  queue_as :default
  require 'httparty'

  def self.scrape
    puts "whatup"
  end

  def self.real_scrape
    appointment_data = JSON.parse(HTTParty.get("https://services.arcgis.com/sFnw0xNflSi8J0uh/arcgis/rest/services/food_truck_schedule/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"))['features']


    appointment_data.each do |appointment|
      name = self.cleanup(appointment['attributes']['Truck'])
      truck = Truck.find_or_create_by(name: name)
      truck.update!(url: appointment['attributes']['Link'])
      location = Location.find_or_create_by(
        address: "#{appointment['attributes']['Location']}, #{appointment['attributes']['Pinpoint']}",
      )
      location.update!(
        latitude: appointment['geometry']['y'],
        longitude: appointment['geometry']['x']
      )
      timeslot = Timeslot.find_or_create_by(
        day: appointment['attributes']['Day'],
        time: appointment['attributes']['Time'],
      )
      # backup method in case the api stops sending coords for trucks
      if ((location.latitude.nil? || location.longitude.nil?) && !location.address.nil?)
        self.set_lat_long(location)
      end

      Appointment.find_or_create_by(
        truck: truck,
        location: location,
        timeslot: timeslot,
      )
    end
  end

private
  def self.cleanup(word)
    error_fixes = {
      'ã' => 'a',
      'à' => 'a',
      'á' => 'a',
      'â' => 'a',
      'ã' => 'a',
      'ä' => 'a',
      'å' => 'a',
      'æ' => 'a',
      'ç' => 'c',
      'è' => 'e',
      'é' => 'e',
      'ê' => 'e',
      'ë' => 'e',
      'ì' => 'e',
      'í' => 'e',
      'î' => 'e',
      'ï' => 'e',
      'ð' => 'o',
      'ò' => 'o',
      'ó' => 'o',
      'ô' => 'o',
      'õ' => 'o',
      'ö' => 'o',
      'ø' => 'o',
      'ù' => 'u',
      'ú' => 'u',
      'û' => 'u',
      'ü' => 'u',
      'ñ' => 'n',
      'barbercue' => 'barbecue',
      'iq cooking' => 'iq cooking on wheels',
      'stoked wood fire pizza' => 'stoked wood fired pizza co.',
    }
    word.downcase!&.strip!
    error_fixes.each do |key, val|
      word&.gsub!(key, val)
    end
    word&.titleize
  end

  def self.set_lat_long(location)    
    loc = find_loc(location.address)
    latitude ||= loc[:latitude]
    longitude ||= loc[:longitude]
    location.update!(
      latitude: latitude,
      longitude: longitude
    )
  end

  def find_loc(address)
    result = HTTParty.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=#{Rails.application.credentials.google_api_key}&input=#{address}&inputtype=textquery&locationbias=point:42.354506,-71.068887&fields=geometry/location")['candidates'][0]

    {
      latitude: result['geometry']['location']['lat'],
      longitude: result['geometry']['location']['lng'],
    }
  end
end
