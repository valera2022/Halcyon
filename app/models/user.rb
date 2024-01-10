class User < ApplicationRecord

    delegated_type :entryable, types: %w[ Student Teacher ], dependent: :destroy
    has_secure_password
    validates :dob,:last_name,:name,presence: true
    validates :username,uniqueness: true
    validates :password, length: { in: 6..20 } 

#    you need to create teacher/student before it can be work with entryable

def classes 
    if self.teacher?
    self.teacher.courses
    else
        self.student.courses
    end

 end
      
end
