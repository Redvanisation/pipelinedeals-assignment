class Deal < ApplicationRecord
  validates_presence_of :name, :value, :stage
end
