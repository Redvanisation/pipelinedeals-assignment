# frozen_string_literal: true

Rails.application.routes.draw do
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :deals, only: [:index]
    end
  end
end
