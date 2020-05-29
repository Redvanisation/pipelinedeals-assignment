require 'rails_helper'

RSpec.describe Deal, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:value) }
  it { should validate_presence_of(:stage) }
end
