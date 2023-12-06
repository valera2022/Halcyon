# This file is used by Rack-based servers to start the application.

require_relative "config/environment"


# use Rack::Cors do
#     allow do
#       origins '*' # Adjust the allowed origin(s) as needed
#       resource '*', headers: :any, methods: [:get, :post, :put, :delete]
#       # Add more resource configurations as needed for other routes
#     end
#   end
  

run Rails.application
Rails.application.load_server




