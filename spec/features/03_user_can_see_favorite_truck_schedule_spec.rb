require 'rails_helper'

feature 'user can see and edit favorite trucks schedule' do
  let!(:truck) { FactoryBot.create(:truck) }
  let!(:location) { FactoryBot.create(:location) }
  let!(:timeslot) { FactoryBot.create(:timeslot) }
  let!(:user) { FactoryBot.create(:user) }

  scenario 'user can see favorite truck schedule details' do
    visit '/'
    click_on "Sign in"
    fill_in 'Email', with: "chewy@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    visit trucks_path
    click_on "Chicken & Rice Guys"
    click_on "Make favorite"

    visit favorite_trucks_path
    click_on "Chicken & Rice Guys"
    expect(page).to have_selector('.truck-info')
  end

  scenario 'user can remove favorite truck' do
    visit '/'
    click_on "Sign in"
    fill_in 'Email', with: "chewy@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    visit trucks_path
    click_on "Chicken & Rice Guys"
    click_on "Make favorite"

    visit favorite_trucks_path
    click_on "Chicken & Rice Guys"
    click_on "Remove from favorites"
    visit favorite_trucks_path
    expect(page).not_to have_content 'Chicken & Rice Guys'
  end

end
