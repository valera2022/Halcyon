class CoursesController < ApplicationController
    # before_action :authorized_teacher, only: :create
    before_action :authorize
   

    def create 
        
        byebug
        course = current_user.courses.create!(strong_params)
        course.valid? render json: course
        
    end
    def index 
        
        courses = Course.all
        render json: courses
     
    end

    private
    def strong_params 
        params.permit(:title,:price,:description,:date,:location)
    
    end
end
