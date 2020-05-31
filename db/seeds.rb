# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

response = RestClient.get "https://api.pipelinedeals.com/api/v3/deals.json?api_key=#{ENV['API_KEY']}"

json = JSON.parse response

if !json.nil?
  json['entries'].map do |deal|
    Deal.create(
      name: deal['name'],
      value: deal['value'],
      stage: deal['deal_stage']['percent']
    )
  end

else
  puts 'Error seeding deals!'
end
