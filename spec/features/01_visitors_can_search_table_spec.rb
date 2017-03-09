require 'rails_helper'

feature 'visitors can open search table' do
  let!(:truck) { FactoryGirl.create(:truck) }
  let!(:location) { FactoryGirl.create(:location) }
  let!(:timeslot) { FactoryGirl.create(:timeslot) }
  let!(:user) { FactoryGirl.create(:user) }

  scenario 'visitor sees home page' do
    visit '/'

    expect(page).to have_content 'SnackTracker'
    expect(page).not_to have_content 'Your trucks'
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

  xscenario 'visitor does not provide proper information for a podcast' do
    visit '/'
    click_on "Sign in"
    fill_in 'Email', with: "chewy@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    visit new_podcast_path

    click_button 'Add podcast'
    expect(page).to have_content "Name can't be blank"
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
