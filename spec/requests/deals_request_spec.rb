# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Deals', type: :request do
  describe 'GET /index' do
    before { get '/api/v1/deals/' }

    it 'returns all the deals in the database as JSON' do
      expect(JSON.parse(response.body).size).to be > 0
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end
  end
end
