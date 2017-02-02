# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if Rails.env.development?
  Timeslot.create(day: "Monday", time: "Breakfast")
  Timeslot.create(day: "Tuesday", time: "Breakfast")
  Timeslot.create(day: "Wednesday", time: "Breakfast")
  Timeslot.create(day: "Thursday", time: "Breakfast")
  Timeslot.create(day: "Friday", time: "Breakfast")
  Timeslot.create(day: "Saturday", time: "Breakfast")
  Timeslot.create(day: "Sunday", time: "Breakfast")
  Timeslot.create(day: "Monday", time: "Lunch")
  Timeslot.create(day: "Tuesday", time: "Lunch")
  Timeslot.create(day: "Wednesday", time: "Lunch")
  Timeslot.create(day: "Thursday", time: "Lunch")
  Timeslot.create(day: "Friday", time: "Lunch")
  Timeslot.create(day: "Saturday", time: "Lunch")
  Timeslot.create(day: "Sunday", time: "Lunch")
  Timeslot.create(day: "Monday", time: "Dinner")
  Timeslot.create(day: "Tuesday", time: "Dinner")
  Timeslot.create(day: "Wednesday", time: "Dinner")
  Timeslot.create(day: "Thursday", time: "Dinner")
  Timeslot.create(day: "Friday", time: "Dinner")
  Timeslot.create(day: "Saturday", time: "Dinner")
  Timeslot.create(day: "Sunday", time: "Dinner")
  Timeslot.create(day: "Monday", time: "Late-night")
  Timeslot.create(day: "Tuesday", time: "Late-night")
  Timeslot.create(day: "Wednesday", time: "Late-night")
  Timeslot.create(day: "Thursday", time: "Late-night")
  Timeslot.create(day: "Friday", time: "Late-night")
  Timeslot.create(day: "Saturday", time: "Late-night")
  Timeslot.create(day: "Sunday", time: "Late-night")

  Location.create(address: "700 Boylston St, Boston, MA 02116")

  Truck.create(name: "Bon Me")
  Truck.create(name: "Chicken & Rice Guys")
  Truck.create(name: "Baja Taco Truck")
end
