# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::API

  def index
    file_path = Rails.root.join('public', 'index.html')
    if File.exist?(file_path)
      render file: file_path
    else
      render html: "React app not found", status: 404
    end
  end
  end