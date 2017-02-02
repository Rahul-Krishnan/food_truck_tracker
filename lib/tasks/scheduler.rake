desc "Scrape data here"
task :scrape => :environment do
  puts "Scraping data..."
  ScrapeJob.scrape
  puts "Data scraped!"
end
