desc "Fake scrape data here"
task :scrape => :environment do
  puts "Fake scraping data..."
  ScrapeJob.scrape
  puts "Data coulda been scraped!"
end

desc "Real Scrape data here"
task :real_scrape => :environment do
  puts "Scraping data..."
  ScrapeJob.real_scrape
  puts "Data scraped!"
end
