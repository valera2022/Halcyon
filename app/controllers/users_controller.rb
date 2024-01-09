class UsersController < ApplicationController
   skip_before_action :authorize
    def show 
        puts "session: #{session.inspect}"
        user = User.find_by(id: session[:user_id])
        if user 
           render json: user
        else
         render json: {error: "Not Authorized"}, status: 401 
        end
     
     end
     def create 
        user = User.create!(strong_params)
        session[:user_id] = user.id
        render json: user
    end
   
    def strong_params 
        params.permit(:name,:username,:password,:password_confirmation )
    
    end
end
