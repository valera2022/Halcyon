class ApplicationController < ActionController::API
    include ActionController::Cookies
    # ActionDispatch::Request.new(ENV)
    def current_user
       User.find_by(entryable_id: session[:entryable_id])
       
    end
    
    def authorized_teacher 
        return render json: {error: "Not Authorized"},status: :unauthorized unless current_user.entryable_type == "Teacher"

    end
    def authorize

        puts session.inspect
        # session["init"] = true
        # session.delete 'init'
        # puts session.inspect
        return render json: {error: "Not Authorized"},status: :unauthorized unless session.include? :entryable_id
      
        
        # session.to_hash
        #  binding.pry
            # u = session.exists?
            
           
            # return Rails.logger.info(session)

        
        
      
       
    
    end
    
end
