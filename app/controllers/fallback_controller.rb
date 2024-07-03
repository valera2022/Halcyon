# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::API

    def index
      # React app index page
      # render file: 'client/halcyon_front/public/index.html'
      # render file: Rails.root.join('public', 'index.html')
      render file: Rails.root.join('client', 'halcyon_front', 'build', 'index.html')
      # render file: Rails.root.join('public', 'index.html')
    #   render file: './client/public/index.html'
    end
  end