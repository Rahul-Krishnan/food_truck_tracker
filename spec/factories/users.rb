FactoryGirl.define do
  factory :user do
    password "password"
    password_confirmation "password"
    email "chewy@gmail.com"
  end
end
