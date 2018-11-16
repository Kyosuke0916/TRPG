Rails.application.routes.draw do
  get 'dices/home'
  resources :sessions, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show, :edit, :update]
  get 'static_pages/home'
  get 'static_pages/help'
  get 'static_pages/about'
  get 'characters/three'
  get 'characters/three3'
  get 'dices/hundred'
  get 'dices/twenty'
  get 'dices/ten'
  get 'dices/six'
  get 'dices/four'
  get 'characters/two6'
  get 'dices/dice'
  post 'characters/skill_set'
  resources :characters, only: [:new, :create, :destroy, :index, :show, :edit, :update]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
