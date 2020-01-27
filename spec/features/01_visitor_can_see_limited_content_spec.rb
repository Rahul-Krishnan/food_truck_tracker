require 'rails_helper'

feature 'visitors can open search table' do
  let!(:truck) { FactoryBot.create(:truck) }
  let!(:location) { FactoryBot.create(:location) }
  let!(:timeslot) { FactoryBot.create(:timeslot) }
  let!(:user) { FactoryBot.create(:user) }

  scenario 'visitor sees home page' do
    visit '/'

    expect(page).to have_content 'SnackTracker'
    expect(page).to have_content 'All Trucks'
    expect(page).to have_content 'Find Trucks'
    expect(page).to have_content 'Sign In'
    expect(page).to have_content 'Sign Up'
  end

  scenario 'visitor cannot see favorite truck list if not logged in' do
    visit '/'

    expect(page).not_to have_content 'Your Trucks'
    expect(page).not_to have_content 'Your Account'
  end
end
