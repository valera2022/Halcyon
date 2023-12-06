class User < ApplicationRecord
    delegated_type :entryable, types: %w[ Student Teacher ], dependent: :destroy
    has_secure_password

#    you need to create teacher/student before it can be work with entryable
      
end
