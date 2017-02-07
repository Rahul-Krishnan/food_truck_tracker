Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  resources :trucks, only: [:index, :show]
  resources :locations, only: [:index]
  resources :appointments, only: [:index]
  resources :favorite_trucks
  resources :home, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :trucks, only: [:index] do
        resources :appointments, only: [:index]
      end
      resources :locations, only: [:index] do
        resources :appointments, only: [:index]
      end
      resource :appointments, only: [:index, :show]
    end
  end
end
