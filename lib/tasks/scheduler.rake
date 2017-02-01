desc "All of the porkachus"
task :scrape => :environment do
  puts "Scraping data..."
  scrape
  puts "Data scraped!"
end
