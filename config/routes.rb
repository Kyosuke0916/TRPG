Rails.application.routes.draw do
  get 'characters/new'
  get 'characters/create'
  get 'characters/index'
  get 'characters/show'
  get 'characters/edit'
  get 'characters/update'
  get 'characters/destroy'
  get 'dices/home'
  resources :sessions, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show, :edit, :update]
  get 'static_pages/home'
  get 'static_pages/help'
  get 'static_pages/about'
  get 'dices/three'
  get 'dices/three3'
  get 'dices/hundred'
  get 'dices/two6'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
