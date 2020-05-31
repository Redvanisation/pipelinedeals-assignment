# frozen_string_literal: true

class CreateDeals < ActiveRecord::Migration[6.0]
  def change
    create_table :deals do |t|
      t.string :name
      t.integer :value
      t.integer :stage

      t.timestamps
    end
  end
end
