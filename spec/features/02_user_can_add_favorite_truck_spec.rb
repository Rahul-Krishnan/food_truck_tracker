require 'rails_helper'

feature 'user can add favorite truck' do
  let!(:truck) { FactoryGirl.create(:truck) }
  let!(:location) { FactoryGirl.create(:location) }
  let!(:timeslot) { FactoryGirl.create(:timeslot) }
  let!(:user) { FactoryGirl.create(:user) }

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

  scenario 'user can see google maps view of truck results' do
    visit '/'
    click_on "Sign in"
    fill_in 'Email', with: "chewy@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    visit trucks_path
    click_on "Chicken & Rice Guys"
    click_on "Make favorite"

    visit favorite_trucks_path
    expect(page).not_to have_content "<div id = 'map'></div>"
    expect(page).to have_content "Provider can't be blank"
  end

  xscenario 'user submits an incomplete entry with no provider' do
    visit '/'
    click_on "Sign in"
    fill_in 'Email', with: "chewy@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    visit new_podcast_path
    fill_in 'Name', with: 'Howard Stern Show'
    click_button 'Add podcast'

    expect(page).to have_content 'Add a podcast'
    expect(page).to have_content "Provider can't be blank"
  end

  xscenario 'user submits duplicate podcast-provider pair' do
    visit '/'
    click_on "Sign in"
    fill_in 'Email', with: "chewy@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    visit new_podcast_path
    fill_in 'Name', with: 'This American Life'
    fill_in 'Provider', with: 'NPR'
    click_button 'Add podcast'

    expect(page).to have_content('Name has already been taken')
  end
end
