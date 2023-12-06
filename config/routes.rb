Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to:"sessions#create"
  delete "/logout", to:"sessions#destroy"
  post "/classes", to:"courses#create"
  get "me", to:"users#show"
  resources :courses
  resources :test
end
