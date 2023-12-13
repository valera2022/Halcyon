class Teacher < ApplicationRecord
    include Entryable
    has_one :user, as: :entryable
    has_many :courses
    has_many :enrollments, through: :courses
    has_many :students,through: :enrollments

  
    
end
