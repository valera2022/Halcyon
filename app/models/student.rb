class Student < ApplicationRecord
    include Entryable
    has_one :user, as: :entryable,
    dependent: :destroy
    has_many :enrollments
    has_many :courses, through: :enrollments 

    def name 
        self.user.name
    
    end
end
