require 'rails_helper'

feature 'user can add favorite truck' do
  let!(:truck) { FactoryBot.create(:truck) }
  let!(:location) { FactoryBot.create(:location) }
  let!(:timeslot) { FactoryBot.create(:timeslot) }
  let!(:user) { FactoryBot.create(:user) }

  scenario "user can sign in" do
    visit '/'
    click_on "Sign in"
    fill_in 'Email', with: "chewy@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    expect(page).to have_content 'Your trucks'
  end

  scenario 'user adds new favorite truck successfully' do
    visit '/'
    click_on "Sign in"
    fill_in 'Email', with: "chewy@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    visit trucks_path
    click_on "Chicken & Rice Guys"
    click_on "Make favorite"

    visit favorite_trucks_path
    expect(page).to have_content 'Chicken & Rice Guys'
  end

  scenario 'user can see google maps view' do
    visit '/'
    click_on "Sign in"
    fill_in 'Email', with: "chewy@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    visit trucks_path
    click_on "Chicken & Rice Guys"
    click_on "Make favorite"

    visit favorite_trucks_path
    expect(find("#map")).to be
  end
end
