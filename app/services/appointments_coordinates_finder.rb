class AppointmentsCoordinatesFinder
  attr_reader :appointments, :coordinates, :lat_lng

  def initialize(appointments:)
    @appointments = appointments
    @coordinates = []
    @lat_lng = {}
  end

  def self.perform(appointments:)
    new(appointments: appointments).perform
  end

  def perform
    appointments.each do |appointment|
        latitude = appointment.latitude
        longitude = appointment.longitude
        curr_lat_lng = "#{latitude},#{longitude}"
        while lat_lng[curr_lat_lng]
          latitude += 0.0005 * (rand(2) * 2 - 1)
          longitude += 0.0005 * (rand(2) * 2 - 1)
          curr_lat_lng = "#{latitude},#{longitude}"
        end
        lat_lng[curr_lat_lng] = true

        coordinates << {
          day: appointment.day,
          id: appointment.truck_id,
          lat: latitude,
          long: longitude,
          meal: appointment.time,
          name: appointment.name,
        }
    end
    
    coordinates
  end
end
