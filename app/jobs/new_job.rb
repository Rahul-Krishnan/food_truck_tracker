class SomeJob < ApplicationJob
  queue_as: default

  def perform(input)
    puts "whatup #{input}"
  end
end
