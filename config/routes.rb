Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :truck, only: [:index, :destroy]
  resources :location, only: [:index, :destroy]
  resources :timeslot, only: [:index]
end
