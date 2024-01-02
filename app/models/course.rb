class Course < ApplicationRecord
    validates :title,:price,:description,:date,:location,:time, presence: true
    validates :title, uniqueness: true
    belongs_to :teacher
    has_many :enrollments , dependent: :destroy
    has_many :students, through: :enrollments
end
