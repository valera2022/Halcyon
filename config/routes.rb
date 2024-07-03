Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "courses#show"

  # get '*path', to: 'your_react_controller#your_react_action', constraints: -> (request) do
  # !request.xhr? && request.format.html?
  
  get "/me", to:"users#show"
  post "/signup", to:"users#create"
  post "/login", to:"sessions#create"
  delete "/logout", to:"sessions#destroy"
  post "/classes", to:"courses#create"
  get "/classes", to:"courses#index"
  patch "/classes/:id", to:"courses#update"
  delete "/classes/:id", to: "courses#destroy"
  
   

  post "/enroll", to: "enrollments#create" 
  delete "/enroll/:id", to: "enrollments#destroy"
  

  # not using associations with course 
  get "/students", to: "students#try"

  # resources :courses
  resources :test

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  root 'fallback#index'
  get '*path', to: "fallback#index", constraints: -> (request) do
  !request.xhr? && request.format.html?
   end


  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
