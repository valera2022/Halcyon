class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
   
    def create 
      
      
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            session[:entryable_type] = user.entryable_type
            render json: user
         

        else
            render json: {error: "Wrong Username or Password"}, status: :unauthorized
        end
    
    end

    def destroy 
       
        
        Rails.logger.info("YOU REACHED DESTROY/LOGOUT FUNCTION")
        session.clear
    
    end
end
