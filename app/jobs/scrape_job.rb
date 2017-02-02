class ScrapeJob < ApplicationJob
  queue_as :default

  def scrape
    puts "whatup"
  end
end
