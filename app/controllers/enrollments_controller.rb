class EnrollmentsController < ApplicationController

    def create
        # byebug
       en = current_student.enrollments.create!(strong_params)
        render json: en
    end
    def destroy 
    #    byebug
        en = current_student.enrollments.find_by(id: params[:id])
        puts "#{en}"
        en.destroy()
    end

    private 
    def strong_params 
        params.permit(:course_id)
        
    
    end
end
