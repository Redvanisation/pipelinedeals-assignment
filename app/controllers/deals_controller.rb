class DealsController < ApplicationController
  def index
    boo = Deal.new
    deals = boo.get_deals

    render json: deals
  end
end
