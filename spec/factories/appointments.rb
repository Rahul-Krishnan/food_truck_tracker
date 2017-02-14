FactoryGirl.define do
  factory :appointment do
    :location = FactoryGirl.create(:location)
    :timeslot = FactoryGirl.create(:timeslot)
    :truck = FactoryGirl.create(:truck)
    location :location
    timeslot :timeslot
    truck :truck
  end
end
