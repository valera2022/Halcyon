require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Halcyon
  class Application < Rails::Application
    
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.action_dispatch.cookies_same_site_protection = :strict
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    config.api_only = true
    # config.middleware.insert_before ActionDispatch::Static, Rack::Cors do
    #   allow do
    #     origins '*'
    #     resource '*', :headers => :any, :methods => [:get, :post, :options]
    #   end
    # end
    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
      config.eager_load = true
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
    
  end
end
