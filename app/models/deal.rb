# frozen_string_literal: true

class Deal < ApplicationRecord
  validates_presence_of :name, :value, :stage
end
