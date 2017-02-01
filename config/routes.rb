Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'trucks#index'

  resources :trucks, only: [:index, :show, :destroy]
  resources :locations, only: [:index, :show, :destroy]
  resources :timeslots, only: [:index, :show]
end
