# frozen_string_literal: true
class Api::V1::DealsController < ApplicationController
  # Fetch the deals from the database, order them by stage and send them as JSON or send an error
  def index
    deals = Deal.order(stage: :asc)

    stage_groups = deals.group_by(&:stage)

    if deals
      render json: stage_groups
    else
      render json: 'Error getting the deals', status: 401
    end
  end
end
