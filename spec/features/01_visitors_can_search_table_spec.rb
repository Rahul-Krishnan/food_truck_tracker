require 'rails_helper'

feature 'visitors can open search table' do
  let!(:truck) { FactoryGirl.create(:truck) }
  let!(:location) { FactoryGirl.create(:location) }
  let!(:timeslot) { FactoryGirl.create(:timeslot) }
  let!(:user) { FactoryGirl.create(:user) }

  scenario 'visitor sees home page' do
    visit '/'

    expect(page).to have_content 'SnackTracker'
  end

  xscenario 'visitor cannot see favorite truck list if not logged in' do
    visit '/'

    expect(page).not_to have_content 'Your trucks'
    expect(page).not_to have_content 'Your account'
  end

  xscenario "user can search appointment table" do
    visit '/'
    click_on "Sign in"
    fill_in 'Email', with: "chewy@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    visit new_podcast_path
    within('.name') do
      fill_in 'Name', with: 'Howard Stern Show'
    end
    fill_in 'Provider', with: 'Sirius XM'
    fill_in 'Description', with: 'Simply disgusting.'
    fill_in 'Release year', with: '1995'
    within('.host') do
      fill_in 'podcast_hosts_attributes_0_name', with: 'Robin'
    end
    check 'Comedy'
    fill_in 'iTunes link', with: 'http://www.itunes.com/stern'
    click_button 'Add podcast'

    expect(page).to have_content 'Podcast added successfully'
    expect(page).to have_content 'Howard Stern Show'
    expect(page).to have_content 'Robin'
  end

end
