class Api::V1::DealsController < ApplicationController
  def index
    deals = Deal.order(stage: :asc)
    if deals
      render json: deals
    else
      render json: 'Error getting the deals', status: 401
    end
  end
end
