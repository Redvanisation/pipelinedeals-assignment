# frozen_string_literal: true

Rails.application.routes.draw do
  # Sets the React app as root
  root 'homepage#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Sets the only the index RESTful route to get the deals
  namespace :api do
    namespace :v1 do
      resources :deals, only: [:index]
    end
  end
end
