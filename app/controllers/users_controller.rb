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
        # byebug
        Rails.logger.info "Signup attempt: #{params.inspect}"
        user = User.create!(
            entryable: Student.create,
            name: params[:name],
            last_name:params[:last_name],
            username:params[:username],
            dob:params[:dob],
            password: params[:password],
            password_confirmation: params[:password_confirmation]
            
            
          )
      
        session[:user_id] = user.id
        render json: user
    end
   
    def strong_params 
        params.permit(:name,:username,:password,:password_confirmation,:dob,:last_name) 
    
    end
end
