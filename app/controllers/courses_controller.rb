class CoursesController < ApplicationController
    before_action :authorized_teacher, only: [:create,:update,:destroy]

    
   

    def create 
        
        # byebug
        Rails.logger.info("YOU REACHED CREATE COURSE METHOD")
        course = current_teacher.courses.create!(strong_params)
        render json: course
        
    end
    def index 
        # byebug
        
        cl = Course.all
        render json: cl
           
    end

    def update 
      
        puts "Request Payload: #{params.inspect}"
        course = current_teacher.courses.find_by(id: params[:id])
        puts course
        course.update!( strong_params)
                  
        render json: course
    
    end
    def destroy 
      
        c = current_teacher.courses.find_by(id: params[:id])
        c.destroy()
    end

    private
    def strong_params 
        params.permit(:title,:price,:description,:date,:location,:time,:id)
    
    end
end
