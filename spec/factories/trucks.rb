FactoryBot.define do
  factory :truck do
    sequence(:name) { |n| "Chicken & Rice Guys #{n}" }
  end
end
