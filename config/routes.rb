Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to:"sessions#create"
  delete "/logout", to:"sessions#destroy"
  post "/classes", to:"courses#create"
  get "/classes", to:"courses#index"
  patch "/classes/:id", to:"courses#update"
  delete "/classes/:id", to: "courses#destroy"
  get "/me", to:"users#show"

  post "/enroll", to: "enrollments#create" 
  delete "/enroll/:id", to: "enrollments#destroy"

  # not using associations with course 
  get "/students", to: "students#try"

  # resources :courses
  resources :test
end
