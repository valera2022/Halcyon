class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
    protect_from_forgery with: :null_session

    # ActionDispatch::Request.new(ENV)
    def current_user
       User.find_by(id: session[:user_id])
       
    end

    def current_teacher 
        current_user.teacher
    end
    def current_student
        current_user.student
    end
    # def student_or_teacher
    #     if session[:entryable_type] == "Teacher"
    #         current_teacher.courses
    #     elsif session[:entryable_type] == "Student"
    #          current_user.student.courses
        
        
    #     end
    
    # end
    


    def authorized_teacher 
        return render json: {error: " Most Be Teacher "},status: :unauthorized unless current_user.entryable_type == "Teacher"

    end

    def authorize
      

      
      
        return render json: {error: "Not Authorized"},status: :unauthorized unless session.include? :user_id
        
      
       
    
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    
end
