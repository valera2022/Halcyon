class TestController < ApplicationController
    def index 
        puts session[:session_id]
        puts session.inspect
    
    end
end
