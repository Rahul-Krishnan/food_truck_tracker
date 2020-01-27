FactoryBot.define do
  factory :user do
    password { "password" }
    password_confirmation { "password" }
    sequence(:email) { |n| "chewy#{n}@gmail.com" }
  end
end
