require 'rails_helper'

RSpec.describe Deal, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:value) }
  it { should validate_presence_of(:stage) }

  it 'checks if the deals has been seeded to the database' do
    expect(Deal.count).not_to eq(0)
  end
end
