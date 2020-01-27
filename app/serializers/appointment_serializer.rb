class AppointmentSerializer < BaseSerializer
  attributes(
    :day,
    :location,
    :time,
    :truck,
  )

  def location
    object.short_address
  end

  def truck
    object.name
  end
end
